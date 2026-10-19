import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { PortablePdbSourcemapMapKind } from "./PortablePdbSourcemapMapKind";

/**
 * Attributes of a Portable PDB file.
 */
export class PortablePdbSourcemapAttributes {
  /**
   * The build identifier.
   */
  "buildId"?: string;
  /**
   * The timestamp when the symbol file was created.
   */
  "createdAt"?: Date;
  /**
   * The file name of the symbol file.
   */
  "fileName"?: string;
  /**
   * The type of source map. Always `portable_pdb` for Portable PDB files.
   */
  "mapkind": PortablePdbSourcemapMapKind;
  /**
   * The size of the symbol file in bytes.
   */
  "size"?: number;
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
      format: "date-time",
    },
    fileName: {
      baseName: "file_name",
      type: "string",
    },
    mapkind: {
      baseName: "mapkind",
      type: "PortablePdbSourcemapMapKind",
      required: true,
    },
    size: {
      baseName: "size",
      type: "number",
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
    return PortablePdbSourcemapAttributes.attributeTypeMap;
  }

  public constructor() {}
}
