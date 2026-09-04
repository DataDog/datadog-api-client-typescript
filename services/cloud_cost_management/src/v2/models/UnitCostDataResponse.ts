import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UnitCostDataAttributesResponse } from "./UnitCostDataAttributesResponse";
import { UnitCostType } from "./UnitCostType";

/**
 * The data object of a unit cost response.
 */
export class UnitCostDataResponse {
  /**
   * The attributes of a unit cost.
   */
  "attributes": UnitCostDataAttributesResponse;
  /**
   * The UUID of the unit cost.
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
      type: "UnitCostDataAttributesResponse",
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
    return UnitCostDataResponse.attributeTypeMap;
  }

  public constructor() {}
}
