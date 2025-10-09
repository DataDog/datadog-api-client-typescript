import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * File metadata for reference tables created by upload.
 */
export class TableResultV2DataAttributesFileMetadataLocalFile {
  /**
   * The error message returned from the creation/update.
   */
  "errorMessage"?: string;
  /**
   * The number of rows that failed to create/update.
   */
  "errorRowCount"?: number;
  /**
   * The upload ID that was used to create/update the table.
   */
  "uploadId"?: string;
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
    errorMessage: {
      baseName: "error_message",
      type: "string",
    },
    errorRowCount: {
      baseName: "error_row_count",
      type: "number",
      format: "int64",
    },
    uploadId: {
      baseName: "upload_id",
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
    return TableResultV2DataAttributesFileMetadataLocalFile.attributeTypeMap;
  }

  public constructor() {}
}
