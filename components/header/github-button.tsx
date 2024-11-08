import 'server-only';

import { GitHubLogoIcon } from '@radix-ui/react-icons';

import { siteConfig } from '@/config/site';

import { Button } from '../ui/button';
import { Link } from '../ui/link';

export default function GithubButton() {
  return (
    <Button
      variant="ghost"
      asChild
      className="px-3 mx-1"
      aria-label="Go to website source on GitHub"
    >
      <Link href={'https://github.com/' + siteConfig.githubRepository}>
        <GitHubLogoIcon />
      </Link>
    </Button>
  );
}
