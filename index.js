import { lambda, Format } from '@node-lambdas/core';
import MarkdownIt from 'markdown-it';

const markdown = new MarkdownIt();
const configuration = {
  version: 2,
  actions: {
    default: {
      input: Format.Text,
      output: Format.Text,
      handler: (input, output) => output.send(markdown.render(input.body)),
    },
  },
};

lambda(configuration);
