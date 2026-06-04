/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of a JavaScript source map.
 */
export class JSSourcemapAttributes {
  /**
   * The absolute path to the minified JavaScript file.
   */
  "absolutePath"?: string;
  /**
   * The path to the source map in blob storage.
   */
  "blobStorageSourcemapPath"?: string;
  /**
   * The build identifier.
   */
  "buildId"?: string;
  /**
   * The timestamp when the source map was created.
   */
  "createdAt": Date;
  /**
   * The domain associated with the source map.
   */
  "domain"?: string;
  /**
   * The file name of the minified JavaScript file.
   */
  "fileName"?: string;
  /**
   * The type of source map.
   */
  "mapkind": string;
  /**
   * The service name associated with the source map.
   */
  "service"?: string;
  /**
   * The size of the source map file in bytes.
   */
  "size": number;
  /**
   * The source map variant.
   */
  "variant"?: string;
  /**
   * The version of the service associated with the source map.
   */
  "version"?: string;
  /**
   * The version code.
   */
  "versionCode"?: string;

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
    absolutePath: {
      baseName: "absolute_path",
      type: "string",
    },
    blobStorageSourcemapPath: {
      baseName: "blob_storage_sourcemap_path",
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
    domain: {
      baseName: "domain",
      type: "string",
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
    service: {
      baseName: "service",
      type: "string",
    },
    size: {
      baseName: "size",
      type: "number",
      required: true,
      format: "int64",
    },
    variant: {
      baseName: "variant",
      type: "string",
    },
    version: {
      baseName: "version",
      type: "string",
    },
    versionCode: {
      baseName: "version_code",
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
    return JSSourcemapAttributes.attributeTypeMap;
  }

  public constructor() {}
}
