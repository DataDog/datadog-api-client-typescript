import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The execution mode for an AI rule revision.
 */
export type AiCustomRuleRevisionExecutionMode =
  | typeof AUTO
  | typeof MANUAL
  | typeof ALWAYS
  | UnparsedObject;
export const AUTO = "auto";
export const MANUAL = "manual";
export const ALWAYS = "always";
