import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreateUploadRequestDataAttributes } from "./CreateUploadRequestDataAttributes";
import { CreateUploadRequestDataType } from "./CreateUploadRequestDataType";

/**
 * The definition of `CreateUploadRequestData` object.
 */
export class CreateUploadRequestData {
  /**
   * The definition of `CreateUploadRequestDataAttributes` object.
   */
  "attributes"?: CreateUploadRequestDataAttributes;
  /**
   * The ID of the upload.
   */
  "id"?: string;
  /**
   * Upload resource type.
   */
  "type": CreateUploadRequestDataType;
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
      type: "CreateUploadRequestDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "CreateUploadRequestDataType",
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
    return CreateUploadRequestData.attributeTypeMap;
  }

  public constructor() {}
}
