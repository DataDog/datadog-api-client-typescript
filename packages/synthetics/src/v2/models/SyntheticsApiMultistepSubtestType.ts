import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Type of the subtest resource.
 */
export type SyntheticsApiMultistepSubtestType = typeof SUBTEST | UnparsedObject;
export const SUBTEST = "subtest";
