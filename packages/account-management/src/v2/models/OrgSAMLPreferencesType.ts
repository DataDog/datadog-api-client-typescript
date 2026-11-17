import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * SAML preferences resource type.
 */
export type OrgSAMLPreferencesType = typeof SAML_PREFERENCES | UnparsedObject;
export const SAML_PREFERENCES = "saml_preferences";
