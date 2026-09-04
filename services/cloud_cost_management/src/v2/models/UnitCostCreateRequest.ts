import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UnitCostCreateRequestData } from "./UnitCostCreateRequestData";

/**
 * A request to create a unit cost.
 */
export class UnitCostCreateRequest {
  /**
   * The data object of a unit cost create request.
   */
  "data": UnitCostCreateRequestData;
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
      type: "UnitCostCreateRequestData",
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
    return UnitCostCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
