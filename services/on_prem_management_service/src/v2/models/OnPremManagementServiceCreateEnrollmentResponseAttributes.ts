import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes for the created enrollment.
 */
export class OnPremManagementServiceCreateEnrollmentResponseAttributes {
  /**
   * The enrollment token.
   */
  "token": string;
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
    token: {
      baseName: "token",
      type: "string",
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
    return OnPremManagementServiceCreateEnrollmentResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
