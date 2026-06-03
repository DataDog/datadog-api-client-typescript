import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IL2CPPSourcemapAttributes } from "./IL2CPPSourcemapAttributes";
import { SourcemapDataType } from "./SourcemapDataType";

/**
 * IL2CPP mapping file data object.
 */
export class IL2CPPSourcemapData {
  /**
   * Attributes of an IL2CPP mapping file.
   */
  "attributes": IL2CPPSourcemapAttributes;
  /**
   * The unique identifier of the source map.
   */
  "id": string;
  /**
   * The resource type for source map objects.
   */
  "type": SourcemapDataType;
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
      type: "IL2CPPSourcemapAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "SourcemapDataType",
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
    return IL2CPPSourcemapData.attributeTypeMap;
  }

  public constructor() {}
}
