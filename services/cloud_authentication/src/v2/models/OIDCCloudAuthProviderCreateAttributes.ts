import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OIDCCloudAuthClaimMatcherCreate } from "./OIDCCloudAuthClaimMatcherCreate";
import { OIDCCloudAuthDiscoveryType } from "./OIDCCloudAuthDiscoveryType";
import { OIDCCloudAuthOrgUUIDSource } from "./OIDCCloudAuthOrgUUIDSource";

/**
 * Attributes for creating a Custom OIDC provider.
 */
export class OIDCCloudAuthProviderCreateAttributes {
  /**
   * Expected token audiences. At least one audience is required. When `org_uuid_source` is `aud`, include datadog/{org_uuid} for the organization creating the provider.
   */
  "audiences": Array<string>;
  /**
   * How the signing keys are discovered.
   */
  "discoveryType": OIDCCloudAuthDiscoveryType;
  /**
   * Claim used by legacy identity_pattern mappings and in identity logs.
   */
  "identityClaimName"?: string;
  /**
   * HTTPS issuer URL that must match the token issuer. For oidc_discovery, signing keys are located through the issuer discovery document.
   */
  "issuerUrl": string;
  /**
   * HTTPS JSON Web Key Set URL. Required when `discovery_type` is `direct_jwks`.
   */
  "jwksUrl"?: string;
  /**
   * Optional name of the token claim containing the Datadog organization UUID.
   */
  "orgUuidClaimName"?: string;
  /**
   * Source of the organization UUID in the signed token. The `aud` source accepts a datadog/{org_uuid} audience.
   */
  "orgUuidSource"?: OIDCCloudAuthOrgUUIDSource;
  /**
   * Name identifying the provider within the organization.
   */
  "providerName": string;
  /**
   * Claim matchers required for every token from this provider, in addition to the persona mapping matchers. Shared issuers can require an exact tenant claim.
   */
  "requiredClaims"?: Array<OIDCCloudAuthClaimMatcherCreate>;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    audiences: {
      baseName: "audiences",
      type: "Array<string>",
      required: true,
    },
    discoveryType: {
      baseName: "discovery_type",
      type: "OIDCCloudAuthDiscoveryType",
      required: true,
    },
    identityClaimName: {
      baseName: "identity_claim_name",
      type: "string",
    },
    issuerUrl: {
      baseName: "issuer_url",
      type: "string",
      required: true,
    },
    jwksUrl: {
      baseName: "jwks_url",
      type: "string",
    },
    orgUuidClaimName: {
      baseName: "org_uuid_claim_name",
      type: "string",
    },
    orgUuidSource: {
      baseName: "org_uuid_source",
      type: "OIDCCloudAuthOrgUUIDSource",
    },
    providerName: {
      baseName: "provider_name",
      type: "string",
      required: true,
    },
    requiredClaims: {
      baseName: "required_claims",
      type: "Array<OIDCCloudAuthClaimMatcherCreate>",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return OIDCCloudAuthProviderCreateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
