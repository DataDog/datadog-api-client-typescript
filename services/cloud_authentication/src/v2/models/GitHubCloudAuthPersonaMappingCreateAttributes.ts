import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GitHubOIDCClaimPatterns } from "./GitHubOIDCClaimPatterns";

/**
 * Attributes for creating a GitHub cloud authentication persona mapping.
 */
export class GitHubCloudAuthPersonaMappingCreateAttributes {
  /**
   * Datadog account identifier (email or handle) mapped to the GitHub principal.
   */
  "accountIdentifier": string;
  /**
   * GitHub Actions OIDC claims to match against. Each field is a regular expression.
   * The `sub` claim is required; all other claims are optional. A token matches only when
   * all provided patterns match simultaneously (AND semantics).
   */
  "claimMatchers": GitHubOIDCClaimPatterns;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    accountIdentifier: {
      baseName: "account_identifier",
      type: "string",
      required: true,
    },
    claimMatchers: {
      baseName: "claim_matchers",
      type: "GitHubOIDCClaimPatterns",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return GitHubCloudAuthPersonaMappingCreateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
