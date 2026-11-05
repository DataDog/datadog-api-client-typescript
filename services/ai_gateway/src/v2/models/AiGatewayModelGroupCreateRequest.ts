import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiGatewayModelGroupCreateData } from "./AiGatewayModelGroupCreateData";

/**
 * Request to create an AI Gateway model group.
 */
export class AiGatewayModelGroupCreateRequest {
  /**
   * Data used to create an AI Gateway model group.
   */
  "data": AiGatewayModelGroupCreateData;
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
      type: "AiGatewayModelGroupCreateData",
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
    return AiGatewayModelGroupCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
