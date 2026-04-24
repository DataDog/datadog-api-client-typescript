import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SyntheticsTestResultRelationshipTest } from "./SyntheticsTestResultRelationshipTest";

/**
 * Relationships for a Synthetic test result.
 */
export class SyntheticsTestResultRelationships {
  /**
   * Relationship to the Synthetic test.
   */
  "test"?: SyntheticsTestResultRelationshipTest;
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
    test: {
      baseName: "test",
      type: "SyntheticsTestResultRelationshipTest",
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
    return SyntheticsTestResultRelationships.attributeTypeMap;
  }

  public constructor() {}
}
