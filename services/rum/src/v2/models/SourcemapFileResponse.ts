import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SourcemapFileData } from "./SourcemapFileData";

/**
 * Response containing a JavaScript source map file.
 */
export class SourcemapFileResponse {
  /**
   * JavaScript source map file data object.
   */
  "data": SourcemapFileData;
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
      type: "SourcemapFileData",
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
    return SourcemapFileResponse.attributeTypeMap;
  }

  public constructor() {}
}
