import { lambda, Format } from '@node-lambdas/core';
import MarkdownIt from 'markdown-it';

const markdown = new MarkdownIt();
const configuration = {
  version: 1,
  input: Format.Text,
  output: Format.Text,
};

lambda(configuration, (input, output) => output.send(markdown.render(input.body)));
