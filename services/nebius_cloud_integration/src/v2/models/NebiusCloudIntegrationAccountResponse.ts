import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { NebiusCloudIntegrationAccountResponseData } from "./NebiusCloudIntegrationAccountResponseData";

/**
 * Response payload for a single Nebius Cloud integration account.
 */
export class NebiusCloudIntegrationAccountResponse {
  /**
   * Data envelope of a Nebius Cloud integration account, including server-assigned identity.
   */
  "data": NebiusCloudIntegrationAccountResponseData;
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
      type: "NebiusCloudIntegrationAccountResponseData",
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
    return NebiusCloudIntegrationAccountResponse.attributeTypeMap;
  }

  public constructor() {}
}
