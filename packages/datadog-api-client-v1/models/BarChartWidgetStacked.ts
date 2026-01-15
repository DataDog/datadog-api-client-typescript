/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { BarChartWidgetLegend } from "./BarChartWidgetLegend";
import { BarChartWidgetStackedType } from "./BarChartWidgetStackedType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Bar chart widget stacked display options.
 */
export class BarChartWidgetStacked {
  /**
   * Bar chart widget stacked legend behavior.
   */
  "legend"?: BarChartWidgetLegend;
  /**
   * Bar chart widget stacked display type.
   */
  "type": BarChartWidgetStackedType;

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
    legend: {
      baseName: "legend",
      type: "BarChartWidgetLegend",
    },
    type: {
      baseName: "type",
      type: "BarChartWidgetStackedType",
      required: true,
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
    return BarChartWidgetStacked.attributeTypeMap;
  }

  public constructor() {}
}
