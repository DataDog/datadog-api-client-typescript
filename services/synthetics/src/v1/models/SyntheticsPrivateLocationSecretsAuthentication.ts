import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Authentication part of the secrets.
 */
export class SyntheticsPrivateLocationSecretsAuthentication {
  /**
   * Access key for the private location.
   */
  "id"?: string;
  /**
   * Secret access key for the private location.
   */
  "key"?: string;
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
    id: {
      baseName: "id",
      type: "string",
    },
    key: {
      baseName: "key",
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
    return SyntheticsPrivateLocationSecretsAuthentication.attributeTypeMap;
  }

  public constructor() {}
}
