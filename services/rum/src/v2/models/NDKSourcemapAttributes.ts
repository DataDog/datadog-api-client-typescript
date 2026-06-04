import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes of an Android NDK symbol file.
 */
export class NDKSourcemapAttributes {
  /**
   * The target CPU architecture.
   */
  "arch"?: string;
  /**
   * The build identifier (UUID format).
   */
  "buildId"?: string;
  /**
   * The timestamp when the symbol file was created.
   */
  "createdAt": Date;
  /**
   * The NDK library file name.
   */
  "fileName"?: string;
  /**
   * The type of source map.
   */
  "mapkind": string;
  /**
   * The size of the symbol file in bytes.
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
    arch: {
      baseName: "arch",
      type: "string",
    },
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
    fileName: {
      baseName: "file_name",
      type: "string",
    },
    mapkind: {
      baseName: "mapkind",
      type: "string",
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
    return NDKSourcemapAttributes.attributeTypeMap;
  }

  public constructor() {}
}
