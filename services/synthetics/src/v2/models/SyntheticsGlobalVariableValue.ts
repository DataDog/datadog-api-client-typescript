import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SyntheticsGlobalVariableOptions } from "./SyntheticsGlobalVariableOptions";

/**
 * Value of the global variable.
 */
export class SyntheticsGlobalVariableValue {
  /**
   * Options for the Global Variable for MFA.
   */
  "options"?: SyntheticsGlobalVariableOptions;
  /**
   * Determines if the value of the variable is hidden.
   */
  "secure"?: boolean;
  /**
   * Value of the global variable. When reading a global variable,
   * the value will not be present if the variable is hidden with the `secure` property.
   */
  "value"?: string;
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
    options: {
      baseName: "options",
      type: "SyntheticsGlobalVariableOptions",
    },
    secure: {
      baseName: "secure",
      type: "boolean",
    },
    value: {
      baseName: "value",
      type: "string",
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
    return SyntheticsGlobalVariableValue.attributeTypeMap;
  }

  public constructor() {}
}
