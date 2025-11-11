/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TableResultV2DataAttributesFileMetadataCloudStorageErrorType } from "./TableResultV2DataAttributesFileMetadataCloudStorageErrorType";
import { TableResultV2DataAttributesFileMetadataOneOfAccessDetails } from "./TableResultV2DataAttributesFileMetadataOneOfAccessDetails";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * File metadata for reference tables created by cloud storage.
 */
export class TableResultV2DataAttributesFileMetadataCloudStorage {
  /**
   * Cloud storage access configuration for the reference table data file.
   */
  "accessDetails": TableResultV2DataAttributesFileMetadataOneOfAccessDetails;
  /**
   * The error message returned from the sync.
   */
  "errorMessage"?: string;
  /**
   * The number of rows that failed to sync.
   */
  "errorRowCount"?: number;
  /**
   * The type of error that occurred during file processing. This field provides high-level error categories for easier troubleshooting and is only present when there are errors.
   */
  "errorType"?: TableResultV2DataAttributesFileMetadataCloudStorageErrorType;
  /**
   * Whether this table is synced automatically.
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
      required: true,
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
    return TableResultV2DataAttributesFileMetadataCloudStorage.attributeTypeMap;
  }

  public constructor() {}
}
