import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * An integrated AWS account the AWS IAM Identity Center integration reads users from.
 */
export class SecurityMonitoringAWSIdentityCenterAWSAccount {
  /**
   * The ID of the AWS account integration configuration.
   */
  "accountConfigId": string;
  /**
   * The AWS account ID.
   */
  "accountId": string;
  /**
   * The name of the AWS account integration.
   */
  "accountName": string;
  /**
   * Whether AWS IAM Identity Center users were collected from this AWS account.
   */
  "collectingUsers": boolean;
  /**
   * Whether resource collection is enabled for this AWS account.
   */
  "resourceCollectionEnabled": boolean;
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
    accountConfigId: {
      baseName: "account_config_id",
      type: "string",
      required: true,
    },
    accountId: {
      baseName: "account_id",
      type: "string",
      required: true,
    },
    accountName: {
      baseName: "account_name",
      type: "string",
      required: true,
    },
    collectingUsers: {
      baseName: "collecting_users",
      type: "boolean",
      required: true,
    },
    resourceCollectionEnabled: {
      baseName: "resource_collection_enabled",
      type: "boolean",
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
    return SecurityMonitoringAWSIdentityCenterAWSAccount.attributeTypeMap;
  }

  public constructor() {}
}
