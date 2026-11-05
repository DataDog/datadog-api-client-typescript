import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiGatewayModelCreateData } from "./AiGatewayModelCreateData";

/**
 * Request to create a model catalog entry.
 */
export class AiGatewayModelCreateRequest {
  /**
   * Data used to create a model catalog entry.
   */
  "data": AiGatewayModelCreateData;
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
      type: "AiGatewayModelCreateData",
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
    return AiGatewayModelCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
