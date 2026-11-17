import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The action that removes a manual severity override.
 */
export type SeverityOverrideClearActionType = typeof CLEAR | UnparsedObject;
export const CLEAR = "clear";
