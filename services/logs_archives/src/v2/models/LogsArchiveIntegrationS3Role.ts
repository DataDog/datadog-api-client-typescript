import { AttributeTypeMap } from "@datadog/datadog-api-client";


/**
 * The S3 Archive's integration destination using an IAM role.
 */
export class LogsArchiveIntegrationS3Role {
  /**
   * The account ID for the integration.
   */
  "accountId": string;
  /**
   * The name of the role to assume for the integration.
   */
  "roleName": string;
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
    return LogsArchiveIntegrationS3Role.attributeTypeMap;
  }

  public constructor() {}
}
