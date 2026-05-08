/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { PointPlotWidgetLegendType } from "./PointPlotWidgetLegendType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Legend configuration for the point plot widget.
 */
export class PointPlotWidgetLegend {
  /**
   * Type of legend to show for the point plot widget.
   */
  "type": PointPlotWidgetLegendType;

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
    type: {
      baseName: "type",
      type: "PointPlotWidgetLegendType",
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
    return PointPlotWidgetLegend.attributeTypeMap;
  }

  public constructor() {}
}
