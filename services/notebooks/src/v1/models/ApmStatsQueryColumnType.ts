import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TableWidgetCellDisplayMode } from "./TableWidgetCellDisplayMode";
import { WidgetSort } from "./WidgetSort";

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
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
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
