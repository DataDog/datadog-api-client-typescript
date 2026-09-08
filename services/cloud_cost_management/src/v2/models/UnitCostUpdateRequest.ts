import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UnitCostUpdateRequestData } from "./UnitCostUpdateRequestData";

/**
 * A request to replace a unit cost.
 */
export class UnitCostUpdateRequest {
  /**
   * The data object of a unit cost replace request.
   */
  "data": UnitCostUpdateRequestData;
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
      type: "UnitCostUpdateRequestData",
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
    return UnitCostUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
