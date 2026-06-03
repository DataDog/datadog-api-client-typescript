import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { JVMSourcemapAttributes } from "./JVMSourcemapAttributes";
import { SourcemapDataType } from "./SourcemapDataType";

/**
 * JVM (ProGuard/R8) mapping file data object.
 */
export class JVMSourcemapData {
  /**
   * Attributes of a JVM mapping file.
   */
  "attributes": JVMSourcemapAttributes;
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
      type: "JVMSourcemapAttributes",
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
    return JVMSourcemapData.attributeTypeMap;
  }

  public constructor() {}
}
