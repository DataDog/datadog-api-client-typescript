import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UnitCostRequestAttributes } from "./UnitCostRequestAttributes";
import { UnitCostType } from "./UnitCostType";

/**
 * The data object of a unit cost replace request.
 */
export class UnitCostUpdateRequestData {
  /**
   * The attributes of a unit cost create or replace request.
   */
  "attributes": UnitCostRequestAttributes;
  /**
   * The UUID of the unit cost being replaced. Must match the `unit_cost_id` path parameter.
   */
  "id": string;
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
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
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
    return UnitCostUpdateRequestData.attributeTypeMap;
  }

  public constructor() {}
}
