import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes for creating a test suite for a DEM journey.
 */
export class DemCreateJourneyTestSuiteAttributes {
  /**
   * Whether to populate the test suite based on journey coverage data.
   */
  "includeTestsFromJourneyCoverage"?: boolean;
  /**
   * An optional custom name for the auto-created test suite.
   */
  "testSuiteName"?: string;
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
    includeTestsFromJourneyCoverage: {
      baseName: "include_tests_from_journey_coverage",
      type: "boolean",
    },
    testSuiteName: {
      baseName: "test_suite_name",
      type: "string",
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
    return DemCreateJourneyTestSuiteAttributes.attributeTypeMap;
  }

  public constructor() {}
}
