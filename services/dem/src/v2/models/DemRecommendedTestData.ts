import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DemRecommendedTestAttributes } from "./DemRecommendedTestAttributes";
import { DemRecommendedTestType } from "./DemRecommendedTestType";

/**
 * Data object for a recommended synthetic test.
 */
export class DemRecommendedTestData {
  /**
   * Attributes of an AI-recommended synthetic test for a DEM journey.
   */
  "attributes": DemRecommendedTestAttributes;
  /**
   * The identifier of the journey associated with the recommendation.
   */
  "id": string;
  /**
   * The type identifier for a recommended synthetic test.
   */
  "type": DemRecommendedTestType;
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
      type: "DemRecommendedTestAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "DemRecommendedTestType",
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
    return DemRecommendedTestData.attributeTypeMap;
  }

  public constructor() {}
}
