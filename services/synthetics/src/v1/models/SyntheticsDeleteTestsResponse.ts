import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SyntheticsDeletedTest } from "./SyntheticsDeletedTest";

/**
 * Response object for deleting Synthetic tests.
 */
export class SyntheticsDeleteTestsResponse {
  /**
   * Array of objects containing a deleted Synthetic test ID with
   * the associated deletion timestamp.
   */
  "deletedTests"?: Array<SyntheticsDeletedTest>;
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
    deletedTests: {
      baseName: "deleted_tests",
      type: "Array<SyntheticsDeletedTest>",
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
    return SyntheticsDeleteTestsResponse.attributeTypeMap;
  }

  public constructor() {}
}
