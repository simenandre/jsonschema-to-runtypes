import * as fs from 'fs';
import { compile } from './main';

(async () => {
  const schema = JSON.parse(fs.readFileSync('jsonschema-test.json', 'utf-8'));
  const h = await compile(schema, 'hello', {
    declareExternallyReferenced: false,
  });

  console.log(h);
})();
