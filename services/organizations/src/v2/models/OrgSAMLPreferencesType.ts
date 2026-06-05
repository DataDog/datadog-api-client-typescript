import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * SAML preferences resource type.
 */
export type OrgSAMLPreferencesType = typeof SAML_PREFERENCES | UnparsedObject;
export const SAML_PREFERENCES = "saml_preferences";
