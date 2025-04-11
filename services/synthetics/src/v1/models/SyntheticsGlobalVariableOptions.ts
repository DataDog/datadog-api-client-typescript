import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SyntheticsGlobalVariableTOTPParameters } from "./SyntheticsGlobalVariableTOTPParameters";

/**
 * Options for the Global Variable for MFA.
 */
export class SyntheticsGlobalVariableOptions {
  /**
   * Parameters for the TOTP/MFA variable
   */
  "totpParameters"?: SyntheticsGlobalVariableTOTPParameters;
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
    totpParameters: {
      baseName: "totp_parameters",
      type: "SyntheticsGlobalVariableTOTPParameters",
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
    return SyntheticsGlobalVariableOptions.attributeTypeMap;
  }

  public constructor() {}
}
