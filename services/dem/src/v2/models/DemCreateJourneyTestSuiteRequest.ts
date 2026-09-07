import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DemCreateJourneyTestSuiteData } from "./DemCreateJourneyTestSuiteData";

/**
 * Request body for creating a test suite for a DEM journey.
 */
export class DemCreateJourneyTestSuiteRequest {
  /**
   * Data object for a create test suite request.
   */
  "data": DemCreateJourneyTestSuiteData;
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
      type: "DemCreateJourneyTestSuiteData",
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
    return DemCreateJourneyTestSuiteRequest.attributeTypeMap;
  }

  public constructor() {}
}
