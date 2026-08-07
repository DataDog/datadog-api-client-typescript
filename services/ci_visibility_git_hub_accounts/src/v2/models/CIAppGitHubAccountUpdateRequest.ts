import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CIAppGitHubAccountUpdateRequestData } from "./CIAppGitHubAccountUpdateRequestData";

/**
 * Request object for updating a GitHub account's CI Visibility opt-in status.
 */
export class CIAppGitHubAccountUpdateRequest {
  /**
   * Data object for updating a GitHub account's CI Visibility opt-in status.
   */
  "data": CIAppGitHubAccountUpdateRequestData;
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
      type: "CIAppGitHubAccountUpdateRequestData",
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
    return CIAppGitHubAccountUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
