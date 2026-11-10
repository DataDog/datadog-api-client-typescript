import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GitHubCostsIntegrationAccountResponseData } from "./GitHubCostsIntegrationAccountResponseData";

/**
 * Response payload for a list of GitHub Costs integration accounts.
 */
export class GitHubCostsIntegrationAccountsResponse {
  /**
   * List of GitHub Costs integration accounts.
   */
  "data": Array<GitHubCostsIntegrationAccountResponseData>;
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
      type: "Array<GitHubCostsIntegrationAccountResponseData>",
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
    return GitHubCostsIntegrationAccountsResponse.attributeTypeMap;
  }

  public constructor() {}
}
