const feature = [
  // NOTE: use bin/dd-cucumber-js to enable dd-trace
  // process.env.DD_AGENT_HOST ? '--require-module dd-trace/init' : '',
  '--require-module ts-node/register',
  '--require features/**/*.ts',
  `--format ${process.env.CI || !process.stdout.isTTY ? 'progress' : 'progress-bar'
  }`,
  '--format rerun:@rerun.txt',
  '--publish-quiet'
].join(' ')

module.exports = {
  default: feature,
}
