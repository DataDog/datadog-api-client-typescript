import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Settings configured on the GitHub Costs integration account.
 */
export class GitHubCostsIntegrationAccountSettingsResponse {
  /**
   * Slug of the GitHub enterprise, as in `https://github.com/enterprises/<enterprise-name>`, or login of a GitHub organization, as in `https://github.com/<organization-name>`.
   */
  "enterpriseName": string;
  /**
   * Comma-separated list of custom tags for this GitHub Costs account.
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
