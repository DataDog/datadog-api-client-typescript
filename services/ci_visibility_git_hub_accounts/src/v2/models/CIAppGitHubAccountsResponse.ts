import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CIAppGitHubAccountData } from "./CIAppGitHubAccountData";

/**
 * Response object containing a list of GitHub accounts and their CI Visibility opt-in status.
 */
export class CIAppGitHubAccountsResponse {
  "data": Array<CIAppGitHubAccountData>;
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
      type: "Array<CIAppGitHubAccountData>",
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
    return CIAppGitHubAccountsResponse.attributeTypeMap;
  }

  public constructor() {}
}
