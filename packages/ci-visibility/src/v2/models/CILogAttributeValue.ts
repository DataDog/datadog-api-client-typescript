import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * A flat additional log attribute. Objects and arrays are not accepted.
 */
export type CILogAttributeValue = string | number | boolean | UnparsedObject;
