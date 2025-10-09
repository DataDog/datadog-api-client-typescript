import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Local file metadata for create requests using the upload ID.
 */
export class CreateTableRequestDataAttributesFileMetadataLocalFile {
  /**
   * The upload ID.
   */
  "uploadId": string;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    uploadId: {
      baseName: "upload_id",
      type: "string",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CreateTableRequestDataAttributesFileMetadataLocalFile.attributeTypeMap;
  }

  public constructor() {}
}
