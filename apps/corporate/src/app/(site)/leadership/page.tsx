import { Container, Section, PageHeader } from '@sarkimota/ui';
import type { Metadata } from 'next';
import { getLeadership } from '@/lib/data';
import { LeadershipGrid } from '@/components/leadership-grid';

export const metadata: Metadata = {
  title: 'Leadership',
  description: 'Meet the leadership team driving SarkiMota Group of Companies.',
};

export default async function LeadershipPage() {
  const leaders = await getLeadership();

  return (
    <>
      <PageHeader
        title="Our Leadership"
        description="The visionaries and executives driving SarkiMota Group&apos;s commitment to excellence."
        variant="dark"
      />

      <Section>
        <Container>
          <LeadershipGrid leaders={leaders} />
        </Container>
      </Section>
    </>
  );
}
