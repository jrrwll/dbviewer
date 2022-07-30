import translation_en from './translation_en.json';
import translation_zh from './translation_zh.json';
import { flatObject } from '../util';

const resources: Record<string, Record<string, string>> = {
    en: flatObject(translation_en),
    zh: flatObject(translation_zh),
} as const;

export default resources;
