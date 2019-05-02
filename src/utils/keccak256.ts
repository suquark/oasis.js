/**
 * Keccak256 utility module to  provide a clean import for keccak 256, i.,e.,
 * import keccak256 from './keccak', for both node and browser.
 */

import * as _sha3 from 'js-sha3';

let sha3: any = undefined;

// Browser.
/* tslint:disable */
if (typeof window !== 'undefined') {
  // @ts-ignore
  sha3 = _sha3.default;
}
// Node.
else {
  sha3 = require('js-sha3');
}

const keccak256 = sha3.keccak256;

export default keccak256;
