import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CaseInsightsData } from "./CaseInsightsData";

/**
 * Request payload for adding or removing case insights.
 */
export class CaseInsightsRequest {
  /**
   * Data object containing the insights to add or remove.
   */
  "data": CaseInsightsData;
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
      type: "CaseInsightsData",
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
    return CaseInsightsRequest.attributeTypeMap;
  }

  public constructor() {}
}
