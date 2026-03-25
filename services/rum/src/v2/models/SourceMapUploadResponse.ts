import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SourceMapUploadResponseData } from "./SourceMapUploadResponseData";

/**
 * Response for source map upload.
 */
export class SourceMapUploadResponse {
  /**
   * Data envelope for source map upload response.
   */
  "data"?: SourceMapUploadResponseData;
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
      type: "SourceMapUploadResponseData",
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
    return SourceMapUploadResponse.attributeTypeMap;
  }

  public constructor() {}
}
