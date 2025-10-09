import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TableResultV2DataAttributesFileMetadataCloudStorageErrorType } from "./TableResultV2DataAttributesFileMetadataCloudStorageErrorType";
import { TableResultV2DataAttributesFileMetadataOneOfAccessDetails } from "./TableResultV2DataAttributesFileMetadataOneOfAccessDetails";

/**
 * File metadata for reference tables created by cloud storage.
 */
export class TableResultV2DataAttributesFileMetadataCloudStorage {
  /**
   * The definition of `TableResultV2DataAttributesFileMetadataOneOfAccessDetails` object.
   */
  "accessDetails"?: TableResultV2DataAttributesFileMetadataOneOfAccessDetails;
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
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
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
