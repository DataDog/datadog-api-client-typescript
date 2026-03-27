import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SourceMapUploadResponseType } from "./SourceMapUploadResponseType";

/**
 * Data envelope for source map upload response.
 */
export class SourceMapUploadResponseData {
  /**
   * Unique identifier for the uploaded source map.
   */
  "id"?: string;
  /**
   * Type of the response.
   */
  "type"?: SourceMapUploadResponseType;
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
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "SourceMapUploadResponseType",
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
    return SourceMapUploadResponseData.attributeTypeMap;
  }

  public constructor() {}
}
