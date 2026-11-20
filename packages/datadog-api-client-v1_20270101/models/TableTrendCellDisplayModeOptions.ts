/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TableTrendCellDisplayModeOptionsYScale } from "./TableTrendCellDisplayModeOptionsYScale";
import { TableTrendType } from "./TableTrendType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class TableTrendCellDisplayModeOptions {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "trendType": TableTrendType;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "yScale": TableTrendCellDisplayModeOptionsYScale;

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
      type: "TableTrendType",
      required: true,
    },
    yScale: {
      baseName: "y_scale",
      type: "TableTrendCellDisplayModeOptionsYScale",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return TableTrendCellDisplayModeOptions.attributeTypeMap;
  }

  public constructor() {}
}
