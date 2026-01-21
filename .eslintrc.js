module.exports = {
  root: true,
  extends: ['@react-native', 'prettier'],
  plugins: ['prettier'],
  rules: {
    // Add custom rules here if needed
    'prettier/prettier': 'warn',
    'react-native/no-inline-styles': 'warn',
  },
};
