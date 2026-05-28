import { PostHog } from 'posthog-node';

export function getServerClient() {
  return new PostHog(process.env.NEXT_PUBLIC_POSTHOG_KEY ?? '', {
    host: process.env.NEXT_PUBLIC_POSTHOG_HOST ?? 'https://app.posthog.com',
  });
}

export function captureEvent(event: string, properties?: Record<string, unknown>) {
  const client = getServerClient();
  client.capture({
    distinctId: 'system',
    event,
    properties,
  });
}
