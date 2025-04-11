import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The S3 Archive's integration destination.
 */
export class LogsArchiveIntegrationS3 {
  /**
   * The account ID for the integration.
   */
  "accountId": string;
  /**
   * The path of the integration.
   */
  "roleName": string;
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
    accountId: {
      baseName: "account_id",
      type: "string",
      required: true,
    },
    roleName: {
      baseName: "role_name",
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
    return LogsArchiveIntegrationS3.attributeTypeMap;
  }

  public constructor() {}
}
