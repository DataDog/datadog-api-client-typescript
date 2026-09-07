import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DemRecommendedTestData } from "./DemRecommendedTestData";

/**
 * Response containing recommended synthetic tests for a DEM journey.
 */
export class DemRecommendedTestsResponse {
  /**
   * Recommended synthetic tests for a DEM journey.
   */
  "data": Array<DemRecommendedTestData>;
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
      type: "Array<DemRecommendedTestData>",
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
    return DemRecommendedTestsResponse.attributeTypeMap;
  }

  public constructor() {}
}
