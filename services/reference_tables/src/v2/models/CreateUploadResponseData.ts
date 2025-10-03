import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreateUploadResponseDataAttributes } from "./CreateUploadResponseDataAttributes";
import { CreateUploadResponseDataType } from "./CreateUploadResponseDataType";

/**
 * The definition of `CreateUploadResponseData` object.
 */
export class CreateUploadResponseData {
  /**
   * The definition of `CreateUploadResponseDataAttributes` object.
   */
  "attributes"?: CreateUploadResponseDataAttributes;
  /**
   * The ID of the upload.
   */
  "id"?: string;
  /**
   * Upload resource type.
   */
  "type": CreateUploadResponseDataType;
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
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
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
