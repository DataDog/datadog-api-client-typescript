import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Settings for creating the GitHub Costs integration account.
 */
export class GitHubCostsIntegrationAccountSettingsRequest {
  /**
   * Slug of the GitHub enterprise, as in `https://github.com/enterprises/<enterprise-name>`, or login of a GitHub organization, as in `https://github.com/<organization-name>`. An enterprise covers every organization it owns. Connecting both an enterprise and one of its organizations counts that organization's costs twice. The token in `authentication` must match: classic for an enterprise, fine-grained for an organization.
   */
  "enterpriseName": string;
  /**
   * Comma-separated list of custom tags for this GitHub Costs account.
   */
  "tags"?: string;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    enterpriseName: {
      baseName: "enterprise_name",
      type: "string",
      required: true,
    },
    tags: {
      baseName: "tags",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return GitHubCostsIntegrationAccountSettingsRequest.attributeTypeMap;
  }

  public constructor() {}
}
