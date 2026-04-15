/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FunnelGroupedDisplay } from "./FunnelGroupedDisplay";
import { FunnelWidgetDefinitionType } from "./FunnelWidgetDefinitionType";
import { ProductAnalyticsFunnelRequest } from "./ProductAnalyticsFunnelRequest";
import { WidgetTextAlign } from "./WidgetTextAlign";
import { WidgetTime } from "./WidgetTime";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The user journey funnel visualization displays conversion funnels based on user journey data from Product Analytics.
 */
export class ProductAnalyticsFunnelWidgetDefinition {
  /**
   * The description of the widget.
   */
  "description"?: string;
  /**
   * Display mode for grouped funnel results.
   */
  "groupedDisplay"?: FunnelGroupedDisplay;
  /**
   * Request payload used to query items.
   */
  "requests": Array<ProductAnalyticsFunnelRequest>;
  /**
   * Time setting for the widget.
   */
  "time"?: WidgetTime;
  /**
   * The title of the widget.
   */
  "title"?: string;
  /**
   * How to align the text on the widget.
   */
  "titleAlign"?: WidgetTextAlign;
  /**
   * The size of the title.
   */
  "titleSize"?: string;
  /**
   * Type of funnel widget.
   */
  "type": FunnelWidgetDefinitionType;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    description: {
      baseName: "description",
      type: "string",
    },
    groupedDisplay: {
      baseName: "grouped_display",
      type: "FunnelGroupedDisplay",
    },
    requests: {
      baseName: "requests",
      type: "Array<ProductAnalyticsFunnelRequest>",
      required: true,
    },
    time: {
      baseName: "time",
      type: "WidgetTime",
    },
    title: {
      baseName: "title",
      type: "string",
    },
    titleAlign: {
      baseName: "title_align",
      type: "WidgetTextAlign",
    },
    titleSize: {
      baseName: "title_size",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "FunnelWidgetDefinitionType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ProductAnalyticsFunnelWidgetDefinition.attributeTypeMap;
  }

  public constructor() {}
}
