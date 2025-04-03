import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Public key for the result encryption.
 */
export class SyntheticsPrivateLocationCreationResponseResultEncryption {
  /**
   * Fingerprint for the encryption key.
   */
  "id"?: string;
  /**
   * Public key for result encryption.
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
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SyntheticsPrivateLocationCreationResponseResultEncryption.attributeTypeMap;
  }

  public constructor() {}
}
