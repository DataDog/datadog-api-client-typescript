import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiGatewayModelsBulkCreateData } from "./AiGatewayModelsBulkCreateData";

/**
 * Request to create several model catalog entries.
 */
export class AiGatewayModelsBulkCreateRequest {
  /**
   * Data used to create several model catalog entries.
   */
  "data": AiGatewayModelsBulkCreateData;
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
      type: "AiGatewayModelsBulkCreateData",
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
    return AiGatewayModelsBulkCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
