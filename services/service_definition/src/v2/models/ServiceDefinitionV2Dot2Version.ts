import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Schema version being used.
 */
export type ServiceDefinitionV2Dot2Version = typeof V2_2 | UnparsedObject;
export const V2_2 = "v2.2";
