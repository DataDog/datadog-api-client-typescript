import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Settings for creating the GitHub Costs integration account.
 */
export class GitHubCostsIntegrationAccountSettingsRequest {
  /**
   * Your GitHub enterprise slug, found on the enterprise settings page (e.g. enterprise-name), or an organization login (e.g. organization-name). An enterprise already covers every organization it owns.
   */
  "enterpriseName": string;
  /**
   * Comma-separated tags added to the collected costs, for example `env:prod,team:example`.
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
