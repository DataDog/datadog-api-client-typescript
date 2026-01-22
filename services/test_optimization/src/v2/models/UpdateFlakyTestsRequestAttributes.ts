import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UpdateFlakyTestsRequestTest } from "./UpdateFlakyTestsRequestTest";

/**
 * Attributes for updating flaky test states.
 */
export class UpdateFlakyTestsRequestAttributes {
  /**
   * List of flaky tests to update.
   */
  "tests": Array<UpdateFlakyTestsRequestTest>;
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
    tests: {
      baseName: "tests",
      type: "Array<UpdateFlakyTestsRequestTest>",
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
    return UpdateFlakyTestsRequestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
