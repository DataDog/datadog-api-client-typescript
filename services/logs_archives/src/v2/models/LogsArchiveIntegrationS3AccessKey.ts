import { AttributeTypeMap } from "@datadog/datadog-api-client";


/**
 * The S3 Archive's integration destination using an access key.
 */
export class LogsArchiveIntegrationS3AccessKey {
  /**
   * The access key ID for the integration.
   */
  "accessKeyId": string;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };
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
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return LogsArchiveIntegrationS3AccessKey.attributeTypeMap;
  }

  public constructor() {}
}
