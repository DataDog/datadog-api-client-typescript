import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Upload configuration specifying how data is uploaded by the user, and properties of the table to associate the upload with.
 */
export class CreateUploadRequestDataAttributes {
  /**
   * The CSV file headers that define the schema fields, provided in the same order as the columns in the uploaded file.
   */
  "headers": Array<string>;
  /**
   * Number of parts to split the file into for multipart upload.
   */
  "partCount": number;
  /**
   * The size of each part in the upload in bytes. All parts except the last one must be at least 5,000,000 bytes.
   */
  "partSize": number;
  /**
   * Name of the table to associate with this upload.
   */
  "tableName": string;
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
    headers: {
      baseName: "headers",
      type: "Array<string>",
      required: true,
    },
    partCount: {
      baseName: "part_count",
      type: "number",
      required: true,
      format: "int32",
    },
    partSize: {
      baseName: "part_size",
      type: "number",
      required: true,
      format: "int64",
    },
    tableName: {
      baseName: "table_name",
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
    return CreateUploadRequestDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
