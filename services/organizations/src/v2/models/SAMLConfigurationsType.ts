import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * SAML configurations resource type.
 */
export type SAMLConfigurationsType =
  | typeof SAML_CONFIGURATIONS
  | UnparsedObject;
export const SAML_CONFIGURATIONS = "saml_configurations";
