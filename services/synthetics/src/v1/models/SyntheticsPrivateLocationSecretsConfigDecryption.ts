import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Private key for the private location.
 */
export class SyntheticsPrivateLocationSecretsConfigDecryption {
  /**
   * Private key for the private location.
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
    key: {
      baseName: "key",
      type: "string",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SyntheticsPrivateLocationSecretsConfigDecryption.attributeTypeMap;
  }

  public constructor() {}
}
