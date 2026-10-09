import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The action that removes a manual severity override.
 */
export type SeverityOverrideClearActionType = typeof CLEAR | UnparsedObject;
export const CLEAR = "clear";
