const feature = [
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
