import babel from 'rollup-plugin-babel';
import changeCase from 'change-case';
import createBanner from 'create-banner';

const pkg = require('./package');
const name = changeCase.pascalCase(pkg.name);
const banner = createBanner({
    data: {
        name: `${name}.js`,
        year: '2015-present',
    },
});

export default {
    input: 'src/index.js',
    output: [
        {
            banner,
            name,
            file: `dist/index.common.js`,
            format: 'cjs',
        },
        {
            banner,
            name,
            file: `dist/index.esm.js`,
            format: 'esm',
        },
        {
            banner,
            name,
            file: `dist/index.js`,
            format: 'umd',
        },
    ],
    plugins: [
        babel(),
    ],
};