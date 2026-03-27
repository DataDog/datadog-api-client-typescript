import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SuiteJsonPatchRequestData } from "./SuiteJsonPatchRequestData";

/**
 * JSON Patch request for a Synthetic test suite.
 */
export class SuiteJsonPatchRequest {
  /**
   * Data object for a JSON Patch request on a Synthetic test suite.
   */
  "data": SuiteJsonPatchRequestData;
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
      type: "SuiteJsonPatchRequestData",
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
    return SuiteJsonPatchRequest.attributeTypeMap;
  }

  public constructor() {}
}
