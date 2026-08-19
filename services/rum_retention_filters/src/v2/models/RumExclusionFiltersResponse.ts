import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RumExclusionFilterData } from "./RumExclusionFilterData";

/**
 * All exclusion filters for a RUM application.
 */
export class RumExclusionFiltersResponse {
  /**
   * A list of exclusion filters.
   */
  "data"?: Array<RumExclusionFilterData>;
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
      type: "Array<RumExclusionFilterData>",
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
    return RumExclusionFiltersResponse.attributeTypeMap;
  }

  public constructor() {}
}
