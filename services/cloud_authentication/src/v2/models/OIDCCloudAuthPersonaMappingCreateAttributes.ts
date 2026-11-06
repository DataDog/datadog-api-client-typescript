import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OIDCCloudAuthClaimMatcherCreate } from "./OIDCCloudAuthClaimMatcherCreate";

/**
 * Attributes for creating a Custom OIDC persona mapping.
 */
export class OIDCCloudAuthPersonaMappingCreateAttributes {
  /**
   * UUID of the Datadog user or service account to authenticate as.
   */
  "accountUuid": string;
  /**
   * Every claim condition must match. Supply claim_matchers or identity_pattern, but not both.
   */
  "claimMatchers"?: Array<OIDCCloudAuthClaimMatcherCreate>;
  /**
   * Legacy glob pattern, limited to 500 UTF-8 bytes when creating a mapping, matched against the provider identity claim. Supply this or claim_matchers, but not both. Prefer claim_matchers with exact mode for a single Kubernetes service account.
   */
  "identityPattern"?: string;
  /**
   * UUID of the registered Custom OIDC provider.
   */
  "providerId": string;
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
    accountUuid: {
      baseName: "account_uuid",
      type: "string",
      required: true,
    },
    claimMatchers: {
      baseName: "claim_matchers",
      type: "Array<OIDCCloudAuthClaimMatcherCreate>",
    },
    identityPattern: {
      baseName: "identity_pattern",
      type: "string",
    },
    providerId: {
      baseName: "provider_id",
      type: "string",
      required: true,
      format: "uuid",
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
    return OIDCCloudAuthPersonaMappingCreateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
