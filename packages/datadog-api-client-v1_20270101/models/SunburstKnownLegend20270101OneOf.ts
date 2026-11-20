/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SunburstKnownLegendAnyOfAnyOfItemType } from "./SunburstKnownLegendAnyOfAnyOfItemType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class SunburstKnownLegend20270101OneOf {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "type": SunburstKnownLegendAnyOfAnyOfItemType;

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
      type: "SunburstKnownLegendAnyOfAnyOfItemType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SunburstKnownLegend20270101OneOf.attributeTypeMap;
  }

  public constructor() {}
}
