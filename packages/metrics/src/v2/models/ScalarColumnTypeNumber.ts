import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The type of column present for numbers.
 */
export type ScalarColumnTypeNumber = typeof NUMBER | UnparsedObject;
export const NUMBER = "number";
