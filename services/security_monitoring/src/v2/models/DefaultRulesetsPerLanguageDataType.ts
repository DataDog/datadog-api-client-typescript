import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Default rulesets per language resource type.
 */
export type DefaultRulesetsPerLanguageDataType =
  | typeof DEFAULT_RULESETS_PER_LANGUAGE
  | UnparsedObject;
export const DEFAULT_RULESETS_PER_LANGUAGE = "defaultRulesetsPerLanguage";
