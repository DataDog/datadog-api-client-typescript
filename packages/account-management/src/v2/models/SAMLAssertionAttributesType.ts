import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * SAML assertion attributes resource type.
 */
export type SAMLAssertionAttributesType =
  | typeof SAML_ASSERTION_ATTRIBUTES
  | UnparsedObject;
export const SAML_ASSERTION_ATTRIBUTES = "saml_assertion_attributes";
