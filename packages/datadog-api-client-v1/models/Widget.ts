/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { WidgetDefinition } from "./WidgetDefinition";
import { WidgetLayout } from "./WidgetLayout";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
   * @ignore
   */
  "unparsedObject"?: any;

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
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return Widget.attributeTypeMap;
  }

  public constructor() {}
}
