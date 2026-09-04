import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes of a DEM journey test suite response.
 */
export class DemJourneyTestSuiteResponseAttributes {
  /**
   * The timestamp when the test suite was created.
   */
  "createdAt": Date;
  /**
   * Test IDs omitted because the caller lacks read access.
   */
  "droppedTestIds"?: Array<string>;
  /**
   * The name of the test suite.
   */
  "name": string;
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
    createdAt: {
      baseName: "created_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    droppedTestIds: {
      baseName: "dropped_test_ids",
      type: "Array<string>",
    },
    name: {
      baseName: "name",
      type: "string",
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
    return DemJourneyTestSuiteResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
