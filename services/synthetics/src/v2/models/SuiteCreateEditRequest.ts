import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SuiteCreateEdit } from "./SuiteCreateEdit";

/**
 * Request body for creating or editing a Synthetic test suite.
 */
export class SuiteCreateEditRequest {
  /**
   * Data object for creating or editing a Synthetic test suite.
   */
  "data": SuiteCreateEdit;
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
      type: "SuiteCreateEdit",
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
    return SuiteCreateEditRequest.attributeTypeMap;
  }

  public constructor() {}
}
