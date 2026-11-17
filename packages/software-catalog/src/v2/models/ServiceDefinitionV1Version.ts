import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Schema version being used.
 */
export type ServiceDefinitionV1Version = typeof V1 | UnparsedObject;
export const V1 = "v1";
