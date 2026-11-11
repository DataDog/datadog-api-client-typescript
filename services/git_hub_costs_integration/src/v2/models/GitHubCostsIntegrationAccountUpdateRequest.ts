import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GitHubCostsIntegrationAccountUpdateData } from "./GitHubCostsIntegrationAccountUpdateData";

/**
 * Request payload to update a GitHub Costs integration account.
 */
export class GitHubCostsIntegrationAccountUpdateRequest {
  /**
   * Data envelope for updating a GitHub Costs integration account.
   */
  "data": GitHubCostsIntegrationAccountUpdateData;
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
    data: {
      baseName: "data",
      type: "GitHubCostsIntegrationAccountUpdateData",
      required: true,
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
    return GitHubCostsIntegrationAccountUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
