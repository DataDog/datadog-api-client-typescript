import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { NebiusCloudIntegrationAccountCreateData } from "./NebiusCloudIntegrationAccountCreateData";

/**
 * Request payload to create a Nebius Cloud integration account.
 */
export class NebiusCloudIntegrationAccountCreateRequest {
  /**
   * Data envelope for creating a Nebius Cloud integration account.
   */
  "data": NebiusCloudIntegrationAccountCreateData;
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
      type: "NebiusCloudIntegrationAccountCreateData",
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
    return NebiusCloudIntegrationAccountCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
