/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityMonitoringAWSIdentityCenterAWSAccount } from "./SecurityMonitoringAWSIdentityCenterAWSAccount";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The attributes of the AWS IAM Identity Center AWS account prerequisites.
 */
export class SecurityMonitoringAWSIdentityCenterAWSAccountsAttributes {
  /**
   * The integrated AWS accounts that users are read from, including AWS Organization management accounts
   * and any accounts that users were collected from.
   */
  "awsAccounts": Array<SecurityMonitoringAWSIdentityCenterAWSAccount>;
  /**
   * Whether AWS IAM Identity Center users were collected for the organization.
   */
  "hasValidPrerequisite": boolean;
  /**
   * The missing setup step when `has_valid_prerequisite` is `false`.
   */
  "reason"?: string;

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
    awsAccounts: {
      baseName: "aws_accounts",
      type: "Array<SecurityMonitoringAWSIdentityCenterAWSAccount>",
      required: true,
    },
    hasValidPrerequisite: {
      baseName: "has_valid_prerequisite",
      type: "boolean",
      required: true,
    },
    reason: {
      baseName: "reason",
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
    return SecurityMonitoringAWSIdentityCenterAWSAccountsAttributes.attributeTypeMap;
  }

  public constructor() {}
}
