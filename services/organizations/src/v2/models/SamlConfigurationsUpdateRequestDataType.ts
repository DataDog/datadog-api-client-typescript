import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of the resource.
 */
export type SamlConfigurationsUpdateRequestDataType =
  | typeof SAML_PREFERENCES
  | UnparsedObject;
export const SAML_PREFERENCES = "saml_preferences";
