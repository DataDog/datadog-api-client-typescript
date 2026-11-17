import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringAWSIdentityCenterAWSAccountsAttributes } from "./SecurityMonitoringAWSIdentityCenterAWSAccountsAttributes";
import { SecurityMonitoringAWSIdentityCenterAWSAccountsResourceType } from "./SecurityMonitoringAWSIdentityCenterAWSAccountsResourceType";

/**
 * The AWS account prerequisites for the AWS IAM Identity Center integration.
 */
export class SecurityMonitoringAWSIdentityCenterAWSAccountsData {
  /**
   * The attributes of the AWS IAM Identity Center AWS account prerequisites.
   */
  "attributes": SecurityMonitoringAWSIdentityCenterAWSAccountsAttributes;
  /**
   * The ID of the organization the AWS accounts belong to.
   */
  "id": string;
  /**
   * The type of the resource. The value should always be `aws_identity_center_aws_accounts`.
   */
  "type": SecurityMonitoringAWSIdentityCenterAWSAccountsResourceType;
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
    attributes: {
      baseName: "attributes",
      type: "SecurityMonitoringAWSIdentityCenterAWSAccountsAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "SecurityMonitoringAWSIdentityCenterAWSAccountsResourceType",
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
    return SecurityMonitoringAWSIdentityCenterAWSAccountsData.attributeTypeMap;
  }

  public constructor() {}
}
