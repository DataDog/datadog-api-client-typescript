import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreateUploadRequestDataAttributes } from "./CreateUploadRequestDataAttributes";
import { CreateUploadRequestDataType } from "./CreateUploadRequestDataType";

/**
 * Request data for creating an upload for a file to be ingested into a reference table.
 */
export class CreateUploadRequestData {
  /**
   * Upload configuration specifying how data is uploaded by the user, and properties of the table to associate the upload with.
   */
  "attributes"?: CreateUploadRequestDataAttributes;
  /**
   * Upload resource type.
   */
  "type": CreateUploadRequestDataType;
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
      type: "CreateUploadRequestDataAttributes",
    },
    type: {
      baseName: "type",
      type: "CreateUploadRequestDataType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CreateUploadRequestData.attributeTypeMap;
  }

  public constructor() {}
}
