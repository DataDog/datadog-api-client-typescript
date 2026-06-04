/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of an ELF symbol file.
 */
export class ELFSourcemapAttributes {
  /**
   * The target CPU architecture.
   */
  "arch"?: string;
  /**
   * The timestamp when the symbol file was created.
   */
  "createdAt": Date;
  /**
   * The SHA256 hash of the ELF file.
   */
  "fileHash"?: string;
  /**
   * The ELF file name.
   */
  "fileName"?: string;
  /**
   * The GNU build ID (UUID format).
   */
  "gnuBuildId"?: string;
  /**
   * The Go build ID (UUID format).
   */
  "goBuildId"?: string;
  /**
   * The type of source map.
   */
  "mapkind": string;
  /**
   * The origin of the ELF file.
   */
  "origin"?: string;
  /**
   * The version of the origin package.
   */
  "originVersion"?: string;
  /**
   * The size of the ELF file in bytes.
   */
  "size": number;
  /**
   * The source of the debug symbols.
   */
  "symbolSource"?: string;

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
    createdAt: {
      baseName: "created_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    fileHash: {
      baseName: "file_hash",
      type: "string",
    },
    fileName: {
      baseName: "file_name",
      type: "string",
    },
    gnuBuildId: {
      baseName: "gnu_build_id",
      type: "string",
    },
    goBuildId: {
      baseName: "go_build_id",
      type: "string",
    },
    mapkind: {
      baseName: "mapkind",
      type: "string",
      required: true,
    },
    origin: {
      baseName: "origin",
      type: "string",
    },
    originVersion: {
      baseName: "origin_version",
      type: "string",
    },
    size: {
      baseName: "size",
      type: "number",
      required: true,
      format: "int64",
    },
    symbolSource: {
      baseName: "symbol_source",
      type: "string",
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
    return ELFSourcemapAttributes.attributeTypeMap;
  }

  public constructor() {}
}
