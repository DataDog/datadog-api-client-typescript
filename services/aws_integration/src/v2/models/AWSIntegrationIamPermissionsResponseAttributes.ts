import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * AWS Integration IAM Permissions response attributes.
 */
export class AWSIntegrationIamPermissionsResponseAttributes {
  /**
   * List of AWS IAM permissions required for the integration.
   */
  "permissions": Array<string>;
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
    permissions: {
      baseName: "permissions",
      type: "Array<string>",
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
    return AWSIntegrationIamPermissionsResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
