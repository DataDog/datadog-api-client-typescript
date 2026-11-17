import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { NebiusCloudIntegrationAccountUpdateData } from "./NebiusCloudIntegrationAccountUpdateData";

/**
 * Request payload to update a Nebius Cloud integration account.
 */
export class NebiusCloudIntegrationAccountUpdateRequest {
  /**
   * Data envelope for updating a Nebius Cloud integration account.
   */
  "data": NebiusCloudIntegrationAccountUpdateData;
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
      type: "NebiusCloudIntegrationAccountUpdateData",
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
    return NebiusCloudIntegrationAccountUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
