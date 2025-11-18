/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TableResultV2DataAttributesFileMetadataCloudStorageErrorType } from "./TableResultV2DataAttributesFileMetadataCloudStorageErrorType";
import { TableResultV2DataAttributesFileMetadataOneOfAccessDetails } from "./TableResultV2DataAttributesFileMetadataOneOfAccessDetails";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Metadata specifying where and how to access the reference table's data file.
 *
 * For cloud storage tables (S3/GCS/Azure):
 *   - sync_enabled and access_details will always be present
 *   - error fields (error_message, error_row_count, error_type) are present only when errors occur
 *
 * For local file tables:
 *   - error fields (error_message, error_row_count) are present only when errors occur
 *   - sync_enabled, access_details are never present
 */
export class TableResultV2DataAttributesFileMetadata {
  /**
   * Cloud storage access configuration for the reference table data file.
   */
  "accessDetails"?: TableResultV2DataAttributesFileMetadataOneOfAccessDetails;
  /**
   * The error message returned from the last operation (sync for cloud storage, upload for local file).
   */
  "errorMessage"?: string;
  /**
   * The number of rows that failed to process.
   */
  "errorRowCount"?: number;
  /**
   * The type of error that occurred during file processing. This field provides high-level error categories for easier troubleshooting and is only present when there are errors.
   */
  "errorType"?: TableResultV2DataAttributesFileMetadataCloudStorageErrorType;
  /**
   * Whether this table is synced automatically from cloud storage. Only applicable for cloud storage sources.
   */
  "syncEnabled"?: boolean;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    accessDetails: {
      baseName: "access_details",
      type: "TableResultV2DataAttributesFileMetadataOneOfAccessDetails",
    },
    errorMessage: {
      baseName: "error_message",
      type: "string",
    },
    errorRowCount: {
      baseName: "error_row_count",
      type: "number",
      format: "int64",
    },
    errorType: {
      baseName: "error_type",
      type: "TableResultV2DataAttributesFileMetadataCloudStorageErrorType",
    },
    syncEnabled: {
      baseName: "sync_enabled",
      type: "boolean",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return TableResultV2DataAttributesFileMetadata.attributeTypeMap;
  }

  public constructor() {}
}
