/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SunburstWidgetLegendTableType } from "./SunburstWidgetLegendTableType";

import { AttributeTypeMap } from "../util";

/**
 * Configuration of table-based legend.
 */
export class SunburstWidgetLegendTable {
  /**
   * Whether or not to show a table legend.
   */
  "type": SunburstWidgetLegendTableType;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    type: {
      baseName: "type",
      type: "SunburstWidgetLegendTableType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SunburstWidgetLegendTable.attributeTypeMap;
  }

  public constructor() {}
}
