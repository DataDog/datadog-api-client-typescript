import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreateUploadResponseData } from "./CreateUploadResponseData";

/**
 * Information about the upload created containing the upload ID and pre-signed URLs to PUT chunks of the CSV file to.
 */
export class CreateUploadResponse {
  /**
   * Upload ID and attributes of the created upload.
   */
  "data"?: CreateUploadResponseData;
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
    data: {
      baseName: "data",
      type: "CreateUploadResponseData",
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
    return CreateUploadResponse.attributeTypeMap;
  }

  public constructor() {}
}
