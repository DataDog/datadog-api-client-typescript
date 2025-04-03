import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProjectedCost } from "./ProjectedCost";

/**
 * Projected Cost response.
 */
export class ProjectedCostResponse {
  /**
   * Response containing Projected Cost.
   */
  "data"?: Array<ProjectedCost>;
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
      type: "Array<ProjectedCost>",
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
    return ProjectedCostResponse.attributeTypeMap;
  }

  public constructor() {}
}
