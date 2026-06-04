import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SourcemapFileAttributes } from "./SourcemapFileAttributes";
import { SourcemapFileDataType } from "./SourcemapFileDataType";

/**
 * JavaScript source map file data object.
 */
export class SourcemapFileData {
  /**
   * Attributes of a JavaScript source map file.
   */
  "attributes": SourcemapFileAttributes;
  /**
   * The unique identifier of the source map file, typically the path to the file.
   */
  "id": string;
  /**
   * The resource type for source map file objects.
   */
  "type": SourcemapFileDataType;
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
      type: "SourcemapFileAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "SourcemapFileDataType",
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
    return SourcemapFileData.attributeTypeMap;
  }

  public constructor() {}
}
