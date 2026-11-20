/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ScatterPlotLegendTypeAnyOfAnyOfItemType4451196800 } from "./ScatterPlotLegendTypeAnyOfAnyOfItemType4451196800";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class ScatterPlotLegendType20270101OneOf4461516160 {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "type": ScatterPlotLegendTypeAnyOfAnyOfItemType4451196800;

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
      type: "ScatterPlotLegendTypeAnyOfAnyOfItemType4451196800",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ScatterPlotLegendType20270101OneOf4461516160.attributeTypeMap;
  }

  public constructor() {}
}
