import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GitHubCostsIntegrationAccountCreateData } from "./GitHubCostsIntegrationAccountCreateData";

/**
 * Request payload to create a GitHub Costs integration account.
 */
export class GitHubCostsIntegrationAccountCreateRequest {
  /**
   * Data envelope for creating a GitHub Costs integration account.
   */
  "data": GitHubCostsIntegrationAccountCreateData;
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
      type: "GitHubCostsIntegrationAccountCreateData",
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
    return GitHubCostsIntegrationAccountCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
