/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { WASMSourcemapMapKind } from "./WASMSourcemapMapKind";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of a WebAssembly symbol file.
 */
export class WASMSourcemapAttributes {
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
   * The type of source map. Always `wasm` for WebAssembly symbol files.
   */
  "mapkind": WASMSourcemapMapKind;
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
      type: "WASMSourcemapMapKind",
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
    return WASMSourcemapAttributes.attributeTypeMap;
  }

  public constructor() {}
}
