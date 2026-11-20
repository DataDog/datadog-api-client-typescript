import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RUMExclusionFilterData } from "./RUMExclusionFilterData";

/**
 * All exclusion filters for a RUM application.
 */
export class RUMExclusionFiltersResponse {
  /**
   * A list of exclusion filters.
   */
  "data"?: Array<RUMExclusionFilterData>;
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
      type: "Array<RUMExclusionFilterData>",
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
    return RUMExclusionFiltersResponse.attributeTypeMap;
  }

  public constructor() {}
}
