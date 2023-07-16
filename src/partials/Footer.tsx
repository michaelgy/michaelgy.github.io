import { Section } from 'astro-boilerplate-components';

import { AppConfig } from '@/utils/AppConfig';

const Footer = () => (
  <Section>
    <div className="border-t border-gray-600 pt-5">
      <div className="text-sm text-gray-200">
        @Copyright {new Date().getFullYear()} by{' '}
        <a
          href="https://github.com/michaelgy"
          className="text-cyan-400 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {AppConfig.author}
        </a>
      </div>
    </div>
  </Section>
);

export { Footer };
