import * as postcss from 'postcss';
import { generate, Options } from "./postcss-generate";


export default postcss.plugin('stylable', (options: Options) => {
    return (root) => {
        generate(root, options);
    };
});