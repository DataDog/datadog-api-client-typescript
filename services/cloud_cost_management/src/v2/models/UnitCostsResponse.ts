import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UnitCostDataResponse } from "./UnitCostDataResponse";

/**
 * A response containing a list of unit costs.
 */
export class UnitCostsResponse {
  /**
   * The list of unit costs.
   */
  "data": Array<UnitCostDataResponse>;
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
      type: "Array<UnitCostDataResponse>",
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
    return UnitCostsResponse.attributeTypeMap;
  }

  public constructor() {}
}
