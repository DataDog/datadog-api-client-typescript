/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes for a GCP Usage Cost config.
 */
export class GCPUsageCostConfigAttributes {
  /**
   * The GCP account ID.
   */
  "accountId": string;
  /**
   * The GCP bucket name used to store the Usage Cost export.
   */
  "bucketName": string;
  /**
   * The timestamp when the GCP Usage Cost config was created.
   */
  "createdAt"?: string;
  /**
   * The export dataset name used for the GCP Usage Cost Report.
   */
  "dataset": string;
  /**
   * The error messages for the GCP Usage Cost config.
   */
  "errorMessages"?: Array<string>;
  /**
   * The export prefix used for the GCP Usage Cost Report.
   */
  "exportPrefix": string;
  /**
   * The name of the GCP Usage Cost Report.
   */
  "exportProjectName": string;
  /**
   * The number of months the report has been backfilled.
   */
  "months"?: number;
  /**
   * The `project_id` of the GCP Usage Cost report.
   */
  "projectId"?: string;
  /**
   * The unique GCP service account email.
   */
  "serviceAccount": string;
  /**
   * The status of the GCP Usage Cost config.
   */
  "status": string;
  /**
   * The timestamp when the GCP Usage Cost config status was updated.
   */
  "statusUpdatedAt"?: string;
  /**
   * The timestamp when the GCP Usage Cost config status was updated.
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
      required: true,
    },
    bucketName: {
      baseName: "bucket_name",
      type: "string",
      required: true,
    },
    createdAt: {
      baseName: "created_at",
      type: "string",
    },
    dataset: {
      baseName: "dataset",
      type: "string",
      required: true,
    },
    errorMessages: {
      baseName: "error_messages",
      type: "Array<string>",
    },
    exportPrefix: {
      baseName: "export_prefix",
      type: "string",
      required: true,
    },
    exportProjectName: {
      baseName: "export_project_name",
      type: "string",
      required: true,
    },
    months: {
      baseName: "months",
      type: "number",
      format: "int32",
    },
    projectId: {
      baseName: "project_id",
      type: "string",
    },
    serviceAccount: {
      baseName: "service_account",
      type: "string",
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
    },
    updatedAt: {
      baseName: "updated_at",
      type: "string",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return GCPUsageCostConfigAttributes.attributeTypeMap;
  }

  public constructor() {}
}
