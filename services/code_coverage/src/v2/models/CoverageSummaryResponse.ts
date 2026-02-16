import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CoverageSummaryData } from "./CoverageSummaryData";

/**
 * Response object containing code coverage summary.
 */
export class CoverageSummaryResponse {
  /**
   * Data object for coverage summary response.
   */
  "data"?: CoverageSummaryData;
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
      type: "CoverageSummaryData",
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
    return CoverageSummaryResponse.attributeTypeMap;
  }

  public constructor() {}
}
