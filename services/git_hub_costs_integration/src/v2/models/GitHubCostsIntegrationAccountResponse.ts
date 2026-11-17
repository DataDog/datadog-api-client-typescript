import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GitHubCostsIntegrationAccountResponseData } from "./GitHubCostsIntegrationAccountResponseData";

/**
 * Response payload for a single GitHub Costs integration account.
 */
export class GitHubCostsIntegrationAccountResponse {
  /**
   * Data envelope of a GitHub Costs integration account, including server-assigned identity.
   */
  "data": GitHubCostsIntegrationAccountResponseData;
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
      type: "GitHubCostsIntegrationAccountResponseData",
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
    return GitHubCostsIntegrationAccountResponse.attributeTypeMap;
  }

  public constructor() {}
}
