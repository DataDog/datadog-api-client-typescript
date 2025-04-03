import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * AWS Authentication config to integrate your account using an access key pair.
 */
export class AWSAuthConfigKeys {
  /**
   * AWS Access Key ID.
   */
  "accessKeyId": string;
  /**
   * AWS Secret Access Key.
   */
  "secretAccessKey"?: string;
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
    accessKeyId: {
      baseName: "access_key_id",
      type: "string",
      required: true,
    },
    secretAccessKey: {
      baseName: "secret_access_key",
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
    return AWSAuthConfigKeys.attributeTypeMap;
  }

  public constructor() {}
}
