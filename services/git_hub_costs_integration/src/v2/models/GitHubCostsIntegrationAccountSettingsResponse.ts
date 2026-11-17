import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Settings configured on the GitHub Costs integration account.
 */
export class GitHubCostsIntegrationAccountSettingsResponse {
  /**
   * Your GitHub enterprise slug, found on the enterprise settings page (e.g. enterprise-name), or an organization login (e.g. organization-name). An enterprise already covers every organization it owns.
   */
  "enterpriseName": string;
  /**
   * Comma-separated tags added to the collected costs, for example `env:prod,team:example`.
   */
  "tags"?: string;
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
    enterpriseName: {
      baseName: "enterprise_name",
      type: "string",
      required: true,
    },
    tags: {
      baseName: "tags",
      type: "string",
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
    return GitHubCostsIntegrationAccountSettingsResponse.attributeTypeMap;
  }

  public constructor() {}
}
