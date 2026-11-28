/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SunburstKnownLegendAnyOfAnyOfItemType4452235232 } from "./SunburstKnownLegendAnyOfAnyOfItemType4452235232";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class SunburstKnownLegend20270101OneOf4462427680 {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "hidePercent"?: boolean;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "hideValue"?: boolean;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "type": SunburstKnownLegendAnyOfAnyOfItemType4452235232;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    hidePercent: {
      baseName: "hide_percent",
      type: "boolean",
    },
    hideValue: {
      baseName: "hide_value",
      type: "boolean",
    },
    type: {
      baseName: "type",
      type: "SunburstKnownLegendAnyOfAnyOfItemType4452235232",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SunburstKnownLegend20270101OneOf4462427680.attributeTypeMap;
  }

  public constructor() {}
}
