/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { GroupWidgetItemDefinition } from "./GroupWidgetItemDefinition";
import { WidgetLayout } from "./WidgetLayout";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A widget defined inside a group.
 */
export class GroupWidgetItem {
  /**
   * Same as the regular widget definition but without group.
   */
  "definition": GroupWidgetItemDefinition;
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
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    definition: {
      baseName: "definition",
      type: "GroupWidgetItemDefinition",
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
    return GroupWidgetItem.attributeTypeMap;
  }

  public constructor() {}
}
