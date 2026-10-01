import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GitHubOIDCClaimPatterns } from "./GitHubOIDCClaimPatterns";

/**
 * Attributes for GitHub cloud authentication intake mapping response.
 */
export class GitHubCloudAuthIntakeMappingAttributesResponse {
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
    return GitHubCloudAuthIntakeMappingAttributesResponse.attributeTypeMap;
  }

  public constructor() {}
}
