import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TerraformBackendSyncStatus } from "./TerraformBackendSyncStatus";

/**
 * Synchronization status for an S3 bucket.
 */
export class TerraformBackendBucket {
  /**
   * Name of the source S3 bucket.
   */
  "bucketName": string;
  /**
   * Error from the most recent failed synchronization, or an empty string otherwise.
   */
  "lastSyncError": string;
  /**
   * Most recent synchronization outcome, or pending if no outcome has been recorded.
   */
  "lastSyncStatus": TerraformBackendSyncStatus;
  /**
   * Time of the most recent synchronization outcome, or null if none has been recorded.
   */
  "lastSyncTime": Date | null;
  /**
   * Identifier of the recurring synchronization job.
   */
  "recurringBlobSyncId": string;
  /**
   * Number of synchronized Terraform state files in the bucket.
   */
  "statefileCount": number;
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
    bucketName: {
      baseName: "bucket_name",
      type: "string",
      required: true,
    },
    lastSyncError: {
      baseName: "last_sync_error",
      type: "string",
      required: true,
    },
    lastSyncStatus: {
      baseName: "last_sync_status",
      type: "TerraformBackendSyncStatus",
      required: true,
    },
    lastSyncTime: {
      baseName: "last_sync_time",
      type: "Date",
      required: true,
      format: "date-time",
    },
    recurringBlobSyncId: {
      baseName: "recurring_blob_sync_id",
      type: "string",
      required: true,
    },
    statefileCount: {
      baseName: "statefile_count",
      type: "number",
      required: true,
      format: "int64",
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
    return TerraformBackendBucket.attributeTypeMap;
  }

  public constructor() {}
}
