/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ConditionalFormats } from "./ConditionalFormats";
import { TableTrendCellDisplayModeOptions } from "./TableTrendCellDisplayModeOptions";
import { TrendTableColumnFormatMode } from "./TrendTableColumnFormatMode";
import { WidgetNumberFormat } from "./WidgetNumberFormat";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class TrendTableColumnFormat {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "conditionalFormats"?: ConditionalFormats;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "mode": TrendTableColumnFormatMode;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "numberFormat"?: WidgetNumberFormat;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "trendOptions": TableTrendCellDisplayModeOptions;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    conditionalFormats: {
      baseName: "conditional_formats",
      type: "ConditionalFormats",
    },
    mode: {
      baseName: "mode",
      type: "TrendTableColumnFormatMode",
      required: true,
    },
    numberFormat: {
      baseName: "number_format",
      type: "WidgetNumberFormat",
    },
    trendOptions: {
      baseName: "trend_options",
      type: "TableTrendCellDisplayModeOptions",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return TrendTableColumnFormat.attributeTypeMap;
  }

  public constructor() {}
}
