/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { WidgetFormulaCellDisplayModeOptionsTrendType } from "./WidgetFormulaCellDisplayModeOptionsTrendType";
import { WidgetFormulaCellDisplayModeOptionsYScale } from "./WidgetFormulaCellDisplayModeOptionsYScale";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Cell display mode options for the widget formula. (only if `cell_display_mode` is set to `trend`).
 */
export class WidgetFormulaCellDisplayModeOptions {
  /**
   * Trend type for the cell display mode options.
   */
  "trendType"?: WidgetFormulaCellDisplayModeOptionsTrendType;
  /**
   * Y scale for the cell display mode options.
   */
  "yScale"?: WidgetFormulaCellDisplayModeOptionsYScale;

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
    trendType: {
      baseName: "trend_type",
      type: "WidgetFormulaCellDisplayModeOptionsTrendType",
    },
    yScale: {
      baseName: "y_scale",
      type: "WidgetFormulaCellDisplayModeOptionsYScale",
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
    return WidgetFormulaCellDisplayModeOptions.attributeTypeMap;
  }

  public constructor() {}
}
