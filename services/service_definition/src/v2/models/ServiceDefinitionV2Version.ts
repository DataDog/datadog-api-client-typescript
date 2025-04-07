import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Schema version being used.
 */
export type ServiceDefinitionV2Version = typeof V2 | UnparsedObject;
export const V2 = "v2";
