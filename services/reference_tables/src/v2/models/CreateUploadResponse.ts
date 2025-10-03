import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreateUploadResponseData } from "./CreateUploadResponseData";

/**
 * The definition of `CreateUploadResponse` object.
 */
export class CreateUploadResponse {
  /**
   * The definition of `CreateUploadResponseData` object.
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
