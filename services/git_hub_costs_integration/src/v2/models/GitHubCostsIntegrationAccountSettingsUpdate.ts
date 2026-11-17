import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Settings for updating the GitHub Costs integration account. Only the fields provided are changed.
 */
export class GitHubCostsIntegrationAccountSettingsUpdate {
  /**
   * Your GitHub enterprise slug, found on the enterprise settings page (e.g. enterprise-name), or an organization login (e.g. organization-name). An enterprise already covers every organization it owns.
   */
  "enterpriseName"?: string;
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
    return GitHubCostsIntegrationAccountSettingsUpdate.attributeTypeMap;
  }

  public constructor() {}
}
