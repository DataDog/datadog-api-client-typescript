/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Read-only status and identifiers for a cloud cost account.
 */
export class CloudCostAccountAttributes {
  /**
   * The cloud provider account identifier, such as an OCI tenancy OCID or AWS account ID.
   */
  "accountId": string;
  /**
   * The cloud provider and cost report type. Currently supports `oci` and `aws_cur2`.
   */
  "cloud": string;
  /**
   * The timestamp when the cloud account was created.
   */
  "createdAt": string;
  /**
   * Validation errors for the cloud account. Empty when there are no errors.
   */
  "errorMessages": Array<string>;
  /**
   * The cloud account status, one of `active`, `warn`, `error`, or `disabled`.
   */
  "status": string;
  /**
   * The timestamp when the cloud account status was last updated.
   */
  "statusUpdatedAt": string;
  /**
   * The timestamp when the cloud account was last updated.
   */
  "updatedAt": string;

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
    cloud: {
      baseName: "cloud",
      type: "string",
      required: true,
    },
    createdAt: {
      baseName: "created_at",
      type: "string",
      required: true,
    },
    errorMessages: {
      baseName: "error_messages",
      type: "Array<string>",
      required: true,
    },
    status: {
      baseName: "status",
      type: "string",
      required: true,
    },
    statusUpdatedAt: {
      baseName: "status_updated_at",
      type: "string",
      required: true,
    },
    updatedAt: {
      baseName: "updated_at",
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
    return CloudCostAccountAttributes.attributeTypeMap;
  }

  public constructor() {}
}
