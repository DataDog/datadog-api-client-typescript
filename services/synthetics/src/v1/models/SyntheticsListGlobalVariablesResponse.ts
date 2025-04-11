import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SyntheticsGlobalVariable } from "./SyntheticsGlobalVariable";

/**
 * Object containing an array of Synthetic global variables.
 */
export class SyntheticsListGlobalVariablesResponse {
  /**
   * Array of Synthetic global variables.
   */
  "variables"?: Array<SyntheticsGlobalVariable>;
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
    variables: {
      baseName: "variables",
      type: "Array<SyntheticsGlobalVariable>",
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
    return SyntheticsListGlobalVariablesResponse.attributeTypeMap;
  }

  public constructor() {}
}
