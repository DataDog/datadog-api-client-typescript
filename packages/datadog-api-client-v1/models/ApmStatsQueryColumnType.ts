/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TableWidgetCellDisplayMode } from "./TableWidgetCellDisplayMode";
import { WidgetSort } from "./WidgetSort";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Column properties.
 */
export class ApmStatsQueryColumnType {
  /**
   * A user-assigned alias for the column.
   */
  "alias"?: string;
  /**
   * Define a display mode for the table cell.
   */
  "cellDisplayMode"?: TableWidgetCellDisplayMode;
  /**
   * Column name.
   */
  "name": string;
  /**
   * Widget sorting methods.
   */
  "order"?: WidgetSort;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    alias: {
      baseName: "alias",
      type: "string",
    },
    cellDisplayMode: {
      baseName: "cell_display_mode",
      type: "TableWidgetCellDisplayMode",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    order: {
      baseName: "order",
      type: "WidgetSort",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ApmStatsQueryColumnType.attributeTypeMap;
  }

  public constructor() {}
}
