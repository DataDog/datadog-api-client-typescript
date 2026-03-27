import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { JsonPatchOperation } from "./JsonPatchOperation";

/**
 * Attributes for a JSON Patch request on a Synthetic test suite.
 */
export class SuiteJsonPatchRequestDataAttributes {
  /**
   * JSON Patch operations following RFC 6902.
   */
  "jsonPatch"?: Array<JsonPatchOperation>;
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
    jsonPatch: {
      baseName: "json_patch",
      type: "Array<JsonPatchOperation>",
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
    return SuiteJsonPatchRequestDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
