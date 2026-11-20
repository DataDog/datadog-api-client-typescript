/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { Comparator } from "./Comparator";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class ThresholdFormattingRule {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "comparator": Comparator;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "customBgColor"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "customFgColor"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "hideValue"?: boolean;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "highlightRow"?: boolean;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "imageUrl"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "metric"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "palette": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "value": number;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    comparator: {
      baseName: "comparator",
      type: "Comparator",
      required: true,
    },
    customBgColor: {
      baseName: "custom_bg_color",
      type: "string",
    },
    customFgColor: {
      baseName: "custom_fg_color",
      type: "string",
    },
    hideValue: {
      baseName: "hide_value",
      type: "boolean",
    },
    highlightRow: {
      baseName: "highlight_row",
      type: "boolean",
    },
    imageUrl: {
      baseName: "image_url",
      type: "string",
    },
    metric: {
      baseName: "metric",
      type: "string",
    },
    palette: {
      baseName: "palette",
      type: "string",
      required: true,
    },
    value: {
      baseName: "value",
      type: "number",
      required: true,
      format: "double",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ThresholdFormattingRule.attributeTypeMap;
  }

  public constructor() {}
}
