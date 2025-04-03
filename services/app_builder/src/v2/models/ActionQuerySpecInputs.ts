import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The inputs to the action query. These are the values that are passed to the action when it is triggered.
 */
export type ActionQuerySpecInputs = string | any | UnparsedObject;
