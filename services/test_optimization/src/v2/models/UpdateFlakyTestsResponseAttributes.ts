import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UpdateFlakyTestsResponseResult } from "./UpdateFlakyTestsResponseResult";

/**
 * Attributes for the update flaky test state response.
 */
export class UpdateFlakyTestsResponseAttributes {
  /**
   * `True` if any errors occurred during the update operations. `False` if all tests succeeded to be updated.
   */
  "hasErrors": boolean;
  /**
   * Results of the update operation for each test.
   */
  "results": Array<UpdateFlakyTestsResponseResult>;
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
    hasErrors: {
      baseName: "has_errors",
      type: "boolean",
      required: true,
    },
    results: {
      baseName: "results",
      type: "Array<UpdateFlakyTestsResponseResult>",
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
    return UpdateFlakyTestsResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
