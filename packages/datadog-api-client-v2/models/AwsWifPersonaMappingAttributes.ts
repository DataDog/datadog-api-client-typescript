/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of an AWS WIF persona mapping.
 */
export class AwsWifPersonaMappingAttributes {
  /**
   * The Datadog user handle (email address) to map the AWS principal to.
   */
  "accountIdentifier": string;
  /**
   * The Datadog user UUID corresponding to `account_identifier`. Read-only — set by the server.
   */
  "accountUuid"?: string;
  /**
   * The AWS IAM ARN pattern identifying the role or user that will be mapped.
   * Supports wildcards (`*`) to match multiple principals within an account.
   */
  "arnPattern": string;

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
    accountIdentifier: {
      baseName: "account_identifier",
      type: "string",
      required: true,
    },
    accountUuid: {
      baseName: "account_uuid",
      type: "string",
      format: "uuid",
    },
    arnPattern: {
      baseName: "arn_pattern",
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
    return AwsWifPersonaMappingAttributes.attributeTypeMap;
  }

  public constructor() {}
}
