import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IL2CPPSourcemapMapKind } from "./IL2CPPSourcemapMapKind";

/**
 * Attributes of an IL2CPP mapping file.
 */
export class IL2CPPSourcemapAttributes {
  /**
   * The build identifier (UUID format).
   */
  "buildId"?: string;
  /**
   * The timestamp when the mapping file was created.
   */
  "createdAt": Date;
  /**
   * The type of source map. Always `il2cpp` for IL2CPP source maps.
   */
  "mapkind": IL2CPPSourcemapMapKind;
  /**
   * The size of the mapping file in bytes.
   */
  "size": number;
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
    buildId: {
      baseName: "build_id",
      type: "string",
    },
    createdAt: {
      baseName: "created_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    mapkind: {
      baseName: "mapkind",
      type: "IL2CPPSourcemapMapKind",
      required: true,
    },
    size: {
      baseName: "size",
      type: "number",
      required: true,
      format: "int64",
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
    return IL2CPPSourcemapAttributes.attributeTypeMap;
  }

  public constructor() {}
}
