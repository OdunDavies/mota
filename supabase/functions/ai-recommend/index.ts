import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.42.0';
import { corsHeaders, handleCors } from '../_shared/cors.ts';

serve(async (req) => {
  const corsResponse = handleCors(req);
  if (corsResponse) return corsResponse;

  try {
    const { preferences } = await req.json();

    const supabase = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
    );

    const { data: vehicles } = await supabase
      .from('vehicles')
      .select('*, vehicle_images(*)')
      .eq('status', 'available')
      .limit(10);

    const openAiKey = Deno.env.get('OPENAI_API_KEY');
    const aiResponse = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4',
        messages: [
          {
            role: 'system',
            content: 'You are a luxury automotive sales consultant. Recommend vehicles based on customer preferences.',
          },
          {
            role: 'user',
            content: `Customer preferences: ${JSON.stringify(preferences)}\nAvailable vehicles: ${JSON.stringify(vehicles)}\nRecommend the top 3 matches and explain why.`,
          },
        ],
      }),
    });

    const aiData = await aiResponse.json();

    return new Response(JSON.stringify({
      recommendations: aiData.choices?.[0]?.message?.content ?? 'Unable to generate recommendations.',
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
