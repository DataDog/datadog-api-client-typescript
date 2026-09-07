import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DemJourneyTestSuiteResponseData } from "./DemJourneyTestSuiteResponseData";

/**
 * Response body for a DEM journey test suite.
 */
export class DemJourneyTestSuiteResponse {
  /**
   * Data object in a DEM test suite response.
   */
  "data": DemJourneyTestSuiteResponseData;
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
      type: "DemJourneyTestSuiteResponseData",
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
    return DemJourneyTestSuiteResponse.attributeTypeMap;
  }

  public constructor() {}
}
