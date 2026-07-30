import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The JSON:API type for RUM operation resources.
 */
export type RUMOperationType = typeof OPERATIONS | UnparsedObject;
export const OPERATIONS = "operations";
