import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Local file metadata for patch requests using upload ID.
 */
export class PatchTableRequestDataAttributesFileMetadataLocalFile {
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
    return PatchTableRequestDataAttributesFileMetadataLocalFile.attributeTypeMap;
  }

  public constructor() {}
}
