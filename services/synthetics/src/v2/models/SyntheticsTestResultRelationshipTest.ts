import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SyntheticsTestResultRelationshipTestData } from "./SyntheticsTestResultRelationshipTestData";

/**
 * Relationship to the Synthetic test.
 */
export class SyntheticsTestResultRelationshipTest {
  /**
   * Data for the test relationship.
   */
  "data"?: SyntheticsTestResultRelationshipTestData;
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
      type: "SyntheticsTestResultRelationshipTestData",
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
    return SyntheticsTestResultRelationshipTest.attributeTypeMap;
  }

  public constructor() {}
}
