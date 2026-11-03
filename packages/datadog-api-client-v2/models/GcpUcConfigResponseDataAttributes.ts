/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The definition of `GcpUcConfigResponseDataAttributes` object.
 */
export class GcpUcConfigResponseDataAttributes {
  /**
   * The `attributes` `account_id`.
   */
  "accountId"?: string;
  /**
   * The `attributes` `bucket_name`.
   */
  "bucketName"?: string;
  /**
   * The `attributes` `created_at`.
   */
  "createdAt"?: string;
  /**
   * The `attributes` `dataset`.
   */
  "dataset"?: string;
  /**
   * The `attributes` `error_messages`.
   */
  "errorMessages"?: Array<string>;
  /**
   * The `attributes` `export_prefix`.
   */
  "exportPrefix"?: string;
  /**
   * The `attributes` `export_project_name`.
   */
  "exportProjectName"?: string;
  /**
   * The `attributes` `months`.
   */
  "months"?: number;
  /**
   * The `attributes` `project_id`.
   */
  "projectId"?: string;
  /**
   * The `attributes` `service_account`.
   */
  "serviceAccount"?: string;
  /**
   * The `attributes` `status`.
   */
  "status"?: string;
  /**
   * The `attributes` `status_updated_at`.
   */
  "statusUpdatedAt"?: string;
  /**
   * The `attributes` `updated_at`.
   */
  "updatedAt"?: string;

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
    },
    bucketName: {
      baseName: "bucket_name",
      type: "string",
    },
    createdAt: {
      baseName: "created_at",
      type: "string",
    },
    dataset: {
      baseName: "dataset",
      type: "string",
    },
    errorMessages: {
      baseName: "error_messages",
      type: "Array<string>",
    },
    exportPrefix: {
      baseName: "export_prefix",
      type: "string",
    },
    exportProjectName: {
      baseName: "export_project_name",
      type: "string",
    },
    months: {
      baseName: "months",
      type: "number",
      format: "int64",
    },
    projectId: {
      baseName: "project_id",
      type: "string",
    },
    serviceAccount: {
      baseName: "service_account",
      type: "string",
    },
    status: {
      baseName: "status",
      type: "string",
    },
    statusUpdatedAt: {
      baseName: "status_updated_at",
      type: "string",
    },
    updatedAt: {
      baseName: "updated_at",
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
    return GcpUcConfigResponseDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
