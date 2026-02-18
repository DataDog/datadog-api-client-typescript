import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * AWS Secrets Manager configuration.
 */
export class AWSSecretManager {
  /**
   * The ID of the connection used to access AWS Secrets Manager.
   */
  "connectionId": string;
  /**
   * The AWS region where the secret is stored.
   */
  "region": string;
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
    connectionId: {
      baseName: "connection_id",
      type: "string",
      required: true,
      format: "uuid",
    },
    region: {
      baseName: "region",
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
    return AWSSecretManager.attributeTypeMap;
  }

  public constructor() {}
}
