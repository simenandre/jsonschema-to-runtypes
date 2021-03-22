import {format as prettify} from 'prettier'
import {Options} from './main'

export function format(code: string, options: Options): string {
  if (!options.format) {
    return code
  }
  return prettify(code, {parser: 'typescript', ...options.style})
}
