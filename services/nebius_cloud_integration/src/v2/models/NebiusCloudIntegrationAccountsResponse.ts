import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { NebiusCloudIntegrationAccountResponseData } from "./NebiusCloudIntegrationAccountResponseData";

/**
 * Response payload for a list of Nebius Cloud integration accounts.
 */
export class NebiusCloudIntegrationAccountsResponse {
  /**
   * List of Nebius Cloud integration accounts.
   */
  "data": Array<NebiusCloudIntegrationAccountResponseData>;
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
      type: "Array<NebiusCloudIntegrationAccountResponseData>",
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
    return NebiusCloudIntegrationAccountsResponse.attributeTypeMap;
  }

  public constructor() {}
}
