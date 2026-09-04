import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UnitCostRequestAttributes } from "./UnitCostRequestAttributes";
import { UnitCostType } from "./UnitCostType";

/**
 * The data object of a unit cost create request.
 */
export class UnitCostCreateRequestData {
  /**
   * The attributes of a unit cost create or replace request.
   */
  "attributes": UnitCostRequestAttributes;
  /**
   * The JSON:API resource type for a unit cost.
   */
  "type": UnitCostType;
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
    attributes: {
      baseName: "attributes",
      type: "UnitCostRequestAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "UnitCostType",
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
    return UnitCostCreateRequestData.attributeTypeMap;
  }

  public constructor() {}
}
