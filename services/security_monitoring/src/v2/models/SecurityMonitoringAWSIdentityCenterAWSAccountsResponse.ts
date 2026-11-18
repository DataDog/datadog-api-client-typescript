import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringAWSIdentityCenterAWSAccountsData } from "./SecurityMonitoringAWSIdentityCenterAWSAccountsData";

/**
 * Response containing the AWS account prerequisites for the AWS IAM Identity Center integration.
 */
export class SecurityMonitoringAWSIdentityCenterAWSAccountsResponse {
  /**
   * The AWS account prerequisites for the AWS IAM Identity Center integration.
   */
  "data": SecurityMonitoringAWSIdentityCenterAWSAccountsData;
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
    data: {
      baseName: "data",
      type: "SecurityMonitoringAWSIdentityCenterAWSAccountsData",
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
    return SecurityMonitoringAWSIdentityCenterAWSAccountsResponse.attributeTypeMap;
  }

  public constructor() {}
}
