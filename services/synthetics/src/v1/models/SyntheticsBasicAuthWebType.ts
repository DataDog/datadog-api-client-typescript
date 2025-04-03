import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of basic authentication to use when performing the test.
 */
export type SyntheticsBasicAuthWebType = typeof WEB | UnparsedObject;
export const WEB = "web";
