import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The definition of `CreateUploadRequestDataAttributes` object.
 */
export class CreateUploadRequestDataAttributes {
  /**
   * The headers of the file to upload.
   */
  "headers": Array<string>;
  /**
   * The number of parts in the upload.
   */
  "partCount": number;
  /**
   * The size of each part in the upload in bytes. For multipart uploads (part_count > 1), all parts except the last one must be at least 5,000,000 bytes. For single-part uploads (part_count = 1), any size is allowed.
   */
  "partSize": number;
  /**
   * The name of the reference table.
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
