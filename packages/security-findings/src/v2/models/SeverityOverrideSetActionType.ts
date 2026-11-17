import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The action that applies a manual severity override.
 */
export type SeverityOverrideSetActionType = typeof SET | UnparsedObject;
export const SET = "set";
