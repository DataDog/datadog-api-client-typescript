import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProjectedCostAttributes } from "./ProjectedCostAttributes";
import { ProjectedCostType } from "./ProjectedCostType";

/**
 * Projected Cost data.
 */
export class ProjectedCost {
  /**
   * Projected Cost attributes data.
   */
  "attributes"?: ProjectedCostAttributes;
  /**
   * Unique ID of the response.
   */
  "id"?: string;
  /**
   * Type of cost data.
   */
  "type"?: ProjectedCostType;
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
      type: "ProjectedCostAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "ProjectedCostType",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ProjectedCost.attributeTypeMap;
  }

  public constructor() {}
}
