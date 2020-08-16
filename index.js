import { lambda, Format } from 'node-lambdas';

lambda({
  input: Format.Text,
  output: Format.Text,
}, (input, output) => output.send(new MarkdownIt().render(input.body)));
