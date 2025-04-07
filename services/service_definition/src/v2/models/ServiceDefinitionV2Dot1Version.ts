import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Schema version being used.
 */
export type ServiceDefinitionV2Dot1Version = typeof V2_1 | UnparsedObject;
export const V2_1 = "v2.1";
