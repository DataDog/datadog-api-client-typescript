/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class Marker {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "displayType"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "fromTs"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "isHovered"?: boolean;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "label"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "max"?: number;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "min"?: number;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "onRightYaxis"?: boolean;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "time"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "toTs"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "ts"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "type"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "val"?: number;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "value"?: string;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    displayType: {
      baseName: "display_type",
      type: "string",
    },
    fromTs: {
      baseName: "from_ts",
      type: "string",
    },
    isHovered: {
      baseName: "is_hovered",
      type: "boolean",
    },
    label: {
      baseName: "label",
      type: "string",
    },
    max: {
      baseName: "max",
      type: "number",
      format: "double",
    },
    min: {
      baseName: "min",
      type: "number",
      format: "double",
    },
    onRightYaxis: {
      baseName: "on_right_yaxis",
      type: "boolean",
    },
    time: {
      baseName: "time",
      type: "string",
    },
    toTs: {
      baseName: "to_ts",
      type: "string",
    },
    ts: {
      baseName: "ts",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "string",
    },
    val: {
      baseName: "val",
      type: "number",
      format: "double",
    },
    value: {
      baseName: "value",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return Marker.attributeTypeMap;
  }

  public constructor() {}
}
