import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GCPCudMetadataConfig } from "./GCPCudMetadataConfig";

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
   * The BigQuery table the committed use discount (CUD) metadata is read from. Only returned when CUD metadata is configured for the account.
   */
  "cudMetadataConfig"?: GCPCudMetadataConfig;
  /**
   * The error codes reported for the committed use discount (CUD) metadata export. Only returned when CUD metadata is configured for the account.
   */
  "cudMetadataErrorCodes"?: Array<number>;
  /**
   * The state of the Google Cloud committed use discount (CUD) metadata export. Only returned when CUD metadata is configured for the account.
   */
  "cudMetadataState"?: string;
  /**
   * The timestamp when the committed use discount (CUD) metadata state was last updated. Only returned when CUD metadata is configured for the account.
   */
  "cudMetadataStatusUpdatedAt"?: string;
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
    cudMetadataConfig: {
      baseName: "cud_metadata_config",
      type: "GCPCudMetadataConfig",
    },
    cudMetadataErrorCodes: {
      baseName: "cud_metadata_error_codes",
      type: "Array<number>",
      format: "int32",
    },
    cudMetadataState: {
      baseName: "cud_metadata_state",
      type: "string",
    },
    cudMetadataStatusUpdatedAt: {
      baseName: "cud_metadata_status_updated_at",
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
