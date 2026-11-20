/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SunburstKnownLegendAnyOfAnyOfItemType4452236352 } from "./SunburstKnownLegendAnyOfAnyOfItemType4452236352";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class SunburstKnownLegend20270101OneOf4462657920 {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "type": SunburstKnownLegendAnyOfAnyOfItemType4452236352;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    type: {
      baseName: "type",
      type: "SunburstKnownLegendAnyOfAnyOfItemType4452236352",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SunburstKnownLegend20270101OneOf4462657920.attributeTypeMap;
  }

  public constructor() {}
}
