import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Value used by the operator in assertions. Can be either a number or string.
 */
export type SyntheticsAssertionTargetValue = number | string | UnparsedObject;
