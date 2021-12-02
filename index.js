import crypto from 'crypto';
import peg from 'pegjs';


function getCacheKey(srcText, filename, config, options) {
  return crypto.createHash('md5')
    .update(srcText)
    .update(config.configString)
    .digest('hex');
}

function process(srcText, filename, config, options) {
    return `module.exports = ${peg.generate(srcText, {output: 'source'})}`;
}

module.exports = {
    getCacheKey,
    process,
};

