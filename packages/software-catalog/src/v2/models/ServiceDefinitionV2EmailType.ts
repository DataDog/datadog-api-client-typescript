import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Contact type.
 */
export type ServiceDefinitionV2EmailType = typeof EMAIL | UnparsedObject;
export const EMAIL = "email";
