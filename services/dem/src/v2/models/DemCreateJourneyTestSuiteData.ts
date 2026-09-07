import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DemCreateJourneyTestSuiteAttributes } from "./DemCreateJourneyTestSuiteAttributes";
import { DemCreateJourneyTestSuiteRequestType } from "./DemCreateJourneyTestSuiteRequestType";

/**
 * Data object for a create test suite request.
 */
export class DemCreateJourneyTestSuiteData {
  /**
   * Attributes for creating a test suite for a DEM journey.
   */
  "attributes"?: DemCreateJourneyTestSuiteAttributes;
  /**
   * The resource type for a request to create a DEM journey test suite.
   */
  "type": DemCreateJourneyTestSuiteRequestType;
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
      type: "DemCreateJourneyTestSuiteAttributes",
    },
    type: {
      baseName: "type",
      type: "DemCreateJourneyTestSuiteRequestType",
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
    return DemCreateJourneyTestSuiteData.attributeTypeMap;
  }

  public constructor() {}
}
