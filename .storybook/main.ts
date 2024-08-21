import type { StorybookConfig } from "@storybook/nextjs";
import type { AddonOptionsWebpack } from '@storybook/addon-coverage';

const coverageConfig: AddonOptionsWebpack = {
  istanbul: {
    include: ['**/app/components/**/*/*.stories.tsx'],
    exclude: ['**/exampleDirectory/**'],
  },
};
 

const config: StorybookConfig = {
  stories: [
    "../app/components/**/*.stories.tsx",
  ],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    '@storybook/addon-coverage',
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  staticDirs: ["../public"],
};
export default config;
