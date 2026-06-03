/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of a React Native source map.
 */
export class ReactNativeSourcemapAttributes {
  /**
   * The build number.
   */
  "buildNumber"?: string;
  /**
   * The bundle name.
   */
  "bundleName"?: string;
  /**
   * The bundle version.
   */
  "bundleVersion"?: string;
  /**
   * The timestamp when the source map was created.
   */
  "createdAt": Date;
  /**
   * The debug identifier (UUID format).
   */
  "debugId"?: string;
  /**
   * The type of source map.
   */
  "mapkind": string;
  /**
   * The platform the source map was built for (e.g., `ios`, `android`).
   */
  "platform"?: string;
  /**
   * The service name associated with the source map.
   */
  "service"?: string;
  /**
   * The size of the source map file in bytes.
   */
  "size": number;
  /**
   * The version of the service associated with the source map.
   */
  "version"?: string;

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
    buildNumber: {
      baseName: "build_number",
      type: "string",
    },
    bundleName: {
      baseName: "bundle_name",
      type: "string",
    },
    bundleVersion: {
      baseName: "bundle_version",
      type: "string",
    },
    createdAt: {
      baseName: "created_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    debugId: {
      baseName: "debug_id",
      type: "string",
    },
    mapkind: {
      baseName: "mapkind",
      type: "string",
      required: true,
    },
    platform: {
      baseName: "platform",
      type: "string",
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
    version: {
      baseName: "version",
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
    return ReactNativeSourcemapAttributes.attributeTypeMap;
  }

  public constructor() {}
}
