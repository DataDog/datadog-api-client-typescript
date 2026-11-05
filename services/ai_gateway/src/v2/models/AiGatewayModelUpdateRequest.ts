import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiGatewayModelUpdateData } from "./AiGatewayModelUpdateData";

/**
 * Request to update a model catalog entry.
 */
export class AiGatewayModelUpdateRequest {
  /**
   * Data used to update a model catalog entry.
   */
  "data": AiGatewayModelUpdateData;
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
      type: "AiGatewayModelUpdateData",
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
    return AiGatewayModelUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
