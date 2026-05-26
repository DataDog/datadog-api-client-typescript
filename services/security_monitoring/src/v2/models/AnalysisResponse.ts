import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AnalysisResponseData } from "./AnalysisResponseData";

/**
 * The response payload from running static analysis on source code.
 */
export class AnalysisResponse {
  /**
   * The primary data object in the analysis response.
   */
  "data": AnalysisResponseData;
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
      type: "AnalysisResponseData",
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
    return AnalysisResponse.attributeTypeMap;
  }

  public constructor() {}
}
