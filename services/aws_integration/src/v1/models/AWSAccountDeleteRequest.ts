import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * List of AWS accounts to delete.
 */
export class AWSAccountDeleteRequest {
  /**
   * Your AWS access key ID. Only required if your AWS account is a GovCloud or China account.
   */
  "accessKeyId"?: string;
  /**
   * Your AWS Account ID without dashes.
   */
  "accountId"?: string;
  /**
   * Your Datadog role delegation name.
   */
  "roleName"?: string;
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
    },
    accountId: {
      baseName: "account_id",
      type: "string",
    },
    roleName: {
      baseName: "role_name",
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
    return AWSAccountDeleteRequest.attributeTypeMap;
  }

  public constructor() {}
}
