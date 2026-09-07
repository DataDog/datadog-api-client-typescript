import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes for a batch get journeys request.
 */
export class DemBatchGetJourneysAttributes {
  /**
   * List of test suite IDs.
   */
  "testSuiteIds": Array<string>;
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
    testSuiteIds: {
      baseName: "test_suite_ids",
      type: "Array<string>",
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
    return DemBatchGetJourneysAttributes.attributeTypeMap;
  }

  public constructor() {}
}
