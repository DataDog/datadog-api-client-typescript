import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Contact type.
 */
export type ServiceDefinitionV2EmailType = typeof EMAIL | UnparsedObject;
export const EMAIL = "email";
