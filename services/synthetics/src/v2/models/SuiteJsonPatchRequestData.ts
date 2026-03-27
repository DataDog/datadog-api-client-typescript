import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SuiteJsonPatchRequestDataAttributes } from "./SuiteJsonPatchRequestDataAttributes";
import { SuiteJsonPatchType } from "./SuiteJsonPatchType";

/**
 * Data object for a JSON Patch request on a Synthetic test suite.
 */
export class SuiteJsonPatchRequestData {
  /**
   * Attributes for a JSON Patch request on a Synthetic test suite.
   */
  "attributes"?: SuiteJsonPatchRequestDataAttributes;
  /**
   * Type for a JSON Patch request on a Synthetic test suite, `suites_json_patch`.
   */
  "type"?: SuiteJsonPatchType;
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
    attributes: {
      baseName: "attributes",
      type: "SuiteJsonPatchRequestDataAttributes",
    },
    type: {
      baseName: "type",
      type: "SuiteJsonPatchType",
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
    return SuiteJsonPatchRequestData.attributeTypeMap;
  }

  public constructor() {}
}
