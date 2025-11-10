import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreateUploadResponseDataAttributes } from "./CreateUploadResponseDataAttributes";
import { CreateUploadResponseDataType } from "./CreateUploadResponseDataType";

/**
 * Upload ID and attributes of the created upload.
 */
export class CreateUploadResponseData {
  /**
   * Pre-signed URLs for uploading parts of the file.
   */
  "attributes"?: CreateUploadResponseDataAttributes;
  /**
   * Unique identifier for this upload. Use this ID when creating the reference table.
   */
  "id"?: string;
  /**
   * Upload resource type.
   */
  "type": CreateUploadResponseDataType;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    attributes: {
      baseName: "attributes",
      type: "CreateUploadResponseDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "CreateUploadResponseDataType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CreateUploadResponseData.attributeTypeMap;
  }

  public constructor() {}
}
