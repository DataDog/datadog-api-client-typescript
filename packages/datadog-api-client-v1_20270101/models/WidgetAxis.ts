/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ScaleType } from "./ScaleType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class WidgetAxis {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "includeZero"?: boolean;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "label"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "max"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "min"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "scale"?: ScaleType;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "showUnit"?: boolean;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    includeZero: {
      baseName: "include_zero",
      type: "boolean",
    },
    label: {
      baseName: "label",
      type: "string",
    },
    max: {
      baseName: "max",
      type: "string",
    },
    min: {
      baseName: "min",
      type: "string",
    },
    scale: {
      baseName: "scale",
      type: "ScaleType",
    },
    showUnit: {
      baseName: "show_unit",
      type: "boolean",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return WidgetAxis.attributeTypeMap;
  }

  public constructor() {}
}
