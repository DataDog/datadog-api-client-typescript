import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Parameters for the TOTP/MFA variable
 */
export class SyntheticsGlobalVariableTOTPParameters {
  /**
   * Number of digits for the OTP code.
   */
  "digits"?: number;
  /**
   * Interval for which to refresh the token (in seconds).
   */
  "refreshInterval"?: number;
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
    digits: {
      baseName: "digits",
      type: "number",
      format: "int32",
    },
    refreshInterval: {
      baseName: "refresh_interval",
      type: "number",
      format: "int32",
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
    return SyntheticsGlobalVariableTOTPParameters.attributeTypeMap;
  }

  public constructor() {}
}
