module.exports = {
  root: true,
  extends: ['airbnb', 'prettier', '@react-native-community'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error'],
    quotes: [2, 'single', { allowTemplateLiterals: true }],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-one-expression-per-line': false,
    'comma-dangle': ['error', 'only-multiline']
  }
};
