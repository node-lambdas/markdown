import { lambda, Format } from '@node-lambdas/core';

const configuration = {
  version: 1,
  input: Format.Text,
  output: Format.Text,
};

lambda(configuration, (input, output) => output.send(new MarkdownIt().render(input.body)));
