import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GitHubCostsIntegrationAccountAuthenticationUpdate } from "./GitHubCostsIntegrationAccountAuthenticationUpdate";
import { GitHubCostsIntegrationAccountSettingsUpdate } from "./GitHubCostsIntegrationAccountSettingsUpdate";

/**
 * Writable attributes used to update a GitHub Costs integration account. Every field is optional; only the fields provided are changed.
 */
export class GitHubCostsIntegrationAccountUpdateAttributes {
  /**
   * Authentication for updating the GitHub Costs integration account. Exactly one method is set.
   */
  "authentication"?: GitHubCostsIntegrationAccountAuthenticationUpdate;
  /**
   * Human-readable name of the GitHub Costs integration account.
   */
  "name"?: string;
  /**
   * Settings for updating the GitHub Costs integration account. Only the fields provided are changed.
   */
  "settings"?: GitHubCostsIntegrationAccountSettingsUpdate;
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
    authentication: {
      baseName: "authentication",
      type: "GitHubCostsIntegrationAccountAuthenticationUpdate",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    settings: {
      baseName: "settings",
      type: "GitHubCostsIntegrationAccountSettingsUpdate",
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
    return GitHubCostsIntegrationAccountUpdateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
