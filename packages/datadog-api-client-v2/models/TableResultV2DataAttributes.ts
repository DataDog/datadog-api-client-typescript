/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ReferenceTableSourceType } from "./ReferenceTableSourceType";
import { TableResultV2DataAttributesFileMetadata } from "./TableResultV2DataAttributesFileMetadata";
import { TableResultV2DataAttributesSchema } from "./TableResultV2DataAttributesSchema";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes that define the reference table's configuration and properties.
 */
export class TableResultV2DataAttributes {
  /**
   * UUID of the user who created the reference table.
   */
  "createdBy"?: string;
  /**
   * Optional text describing the purpose or contents of this reference table.
   */
  "description"?: string;
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
  "fileMetadata"?: TableResultV2DataAttributesFileMetadata;
  /**
   * UUID of the user who last updated the reference table.
   */
  "lastUpdatedBy"?: string;
  /**
   * The number of successfully processed rows in the reference table.
   */
  "rowCount"?: number;
  /**
   * Schema defining the structure and columns of the reference table.
   */
  "schema"?: TableResultV2DataAttributesSchema;
  /**
   * The source type for reference table data. Includes all possible source types that can appear in responses.
   */
  "source"?: ReferenceTableSourceType;
  /**
   * The processing status of the table.
   */
  "status"?: string;
  /**
   * Unique name to identify this reference table. Used in enrichment processors and API calls.
   */
  "tableName"?: string;
  /**
   * Tags for organizing and filtering reference tables.
   */
  "tags"?: Array<string>;
  /**
   * When the reference table was last updated, in ISO 8601 format.
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
    createdBy: {
      baseName: "created_by",
      type: "string",
    },
    description: {
      baseName: "description",
      type: "string",
    },
    fileMetadata: {
      baseName: "file_metadata",
      type: "TableResultV2DataAttributesFileMetadata",
    },
    lastUpdatedBy: {
      baseName: "last_updated_by",
      type: "string",
    },
    rowCount: {
      baseName: "row_count",
      type: "number",
      format: "int64",
    },
    schema: {
      baseName: "schema",
      type: "TableResultV2DataAttributesSchema",
    },
    source: {
      baseName: "source",
      type: "ReferenceTableSourceType",
    },
    status: {
      baseName: "status",
      type: "string",
    },
    tableName: {
      baseName: "table_name",
      type: "string",
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
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
    return TableResultV2DataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
