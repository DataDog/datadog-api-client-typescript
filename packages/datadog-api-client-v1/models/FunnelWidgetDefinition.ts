/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FunnelWidgetDefinitionType } from "./FunnelWidgetDefinitionType";
import { FunnelWidgetRequest } from "./FunnelWidgetRequest";
import { WidgetTextAlign } from "./WidgetTextAlign";
import { WidgetTime } from "./WidgetTime";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The funnel visualization displays a funnel of user sessions that maps a sequence of view navigation and user interaction in your application.
 */
export class FunnelWidgetDefinition {
  /**
   * Request payload used to query items.
   */
  "requests": [FunnelWidgetRequest];
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
    requests: {
      baseName: "requests",
      type: "[FunnelWidgetRequest]",
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
}
