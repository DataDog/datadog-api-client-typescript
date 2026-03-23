import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GlobalVariableJsonPatchRequestDataAttributes } from "./GlobalVariableJsonPatchRequestDataAttributes";
import { GlobalVariableJsonPatchType } from "./GlobalVariableJsonPatchType";

/**
 * Data object for a JSON Patch request on a Synthetic global variable.
 */
export class GlobalVariableJsonPatchRequestData {
  /**
   * Attributes for a JSON Patch request on a Synthetic global variable.
   */
  "attributes"?: GlobalVariableJsonPatchRequestDataAttributes;
  /**
   * Global variable JSON Patch type.
   */
  "type"?: GlobalVariableJsonPatchType;
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
      type: "GlobalVariableJsonPatchRequestDataAttributes",
    },
    type: {
      baseName: "type",
      type: "GlobalVariableJsonPatchType",
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
    return GlobalVariableJsonPatchRequestData.attributeTypeMap;
  }

  public constructor() {}
}
