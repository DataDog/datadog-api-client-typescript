import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { WidgetDefinition } from "./WidgetDefinition";
import { WidgetLayout } from "./WidgetLayout";

/**
 * Information about widget.
 * 
 * **Note**: The `layout` property is required for widgets in dashboards with `free` `layout_type`.
 *       For the **new dashboard layout**, the `layout` property depends on the `reflow_type` of the dashboard.
 *       - If `reflow_type` is `fixed`, `layout` is required.
 *       - If `reflow_type` is `auto`, `layout` should not be set.
 */
export class Widget {
  /**
   * [Definition of the widget](https://docs.datadoghq.com/dashboards/widgets/).
   */
  "definition": WidgetDefinition;
  /**
   * ID of the widget.
   */
  "id"?: number;
  /**
   * The layout for a widget on a `free` or **new dashboard layout** dashboard.
   */
  "layout"?: WidgetLayout;
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
    definition: {
      baseName: "definition",
      type: "WidgetDefinition",
      required: true,
    },
    id: {
      baseName: "id",
      type: "number",
      format: "int64",
    },
    layout: {
      baseName: "layout",
      type: "WidgetLayout",
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
    return Widget.attributeTypeMap;
  }

  public constructor() {}
}
