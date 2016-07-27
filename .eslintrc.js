module.exports = {
    extends: 'airbnb',
    settings: {
        'import/resolver': 'webpack'
    },
    plugins: [
        'react'
    ],
    rules: {
        indent: ['error', 4],
        'no-param-reassign': ['error', { props: false }]
    }
};
