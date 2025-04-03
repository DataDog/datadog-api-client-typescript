import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Contact type.
 */
export type ServiceDefinitionV2Dot1EmailType = typeof EMAIL | UnparsedObject;
export const EMAIL = "email";
