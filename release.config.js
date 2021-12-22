module.exports = {
  branches: ['master'],
  plugins: [
    '@semantic-release/changelog',
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/git',
      {
        assets: ['CHANGELOG.md'],
        message:
          '${nextRelease.version} CHANGELOG [skip ci]\n\n${nextRelease.notes}',
      },
    ],
    '@semantic-release/npm',
    '@semantic-release/github',
  ],
};
