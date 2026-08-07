import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CIAppGitHubAccountData } from "./CIAppGitHubAccountData";

/**
 * Response object containing a single GitHub account's CI Visibility opt-in status.
 */
export class CIAppGitHubAccountResponse {
  /**
   * Data object for a GitHub account.
   */
  "data": CIAppGitHubAccountData;
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
      type: "CIAppGitHubAccountData",
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
    return CIAppGitHubAccountResponse.attributeTypeMap;
  }

  public constructor() {}
}
