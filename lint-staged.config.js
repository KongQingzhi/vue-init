export default {
  '*.vue': ['stylelint --fix', 'eslint --fix', 'prettier --write'],
  '*.{ts,tsx,js,jsx}': ['eslint --fix', 'prettier --write'],
  '*.css': ['stylelint --fix', 'prettier --write'],
  '*.md': ['stylelint --fix', 'prettier --write'],
};
