/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ToplistWidgetDefinitionType } from "./ToplistWidgetDefinitionType";
import { ToplistWidgetRequest } from "./ToplistWidgetRequest";
import { WidgetCustomLink } from "./WidgetCustomLink";
import { WidgetTextAlign } from "./WidgetTextAlign";
import { WidgetTime } from "./WidgetTime";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The top list visualization enables you to display a list of Tag value like hostname or service with the most or least of any metric value, such as highest consumers of CPU, hosts with the least disk space, etc.
 */
export class ToplistWidgetDefinition {
  /**
   * List of custom links.
   */
  "customLinks"?: Array<WidgetCustomLink>;
  /**
   * List of top list widget requests.
   */
  "requests": Array<ToplistWidgetRequest>;
  /**
   * Time setting for the widget.
   */
  "time"?: WidgetTime;
  /**
   * Title of your widget.
   */
  "title"?: string;
  /**
   * How to align the text on the widget.
   */
  "titleAlign"?: WidgetTextAlign;
  /**
   * Size of the title.
   */
  "titleSize"?: string;
  /**
   * Type of the top list widget.
   */
  "type": ToplistWidgetDefinitionType;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    customLinks: {
      baseName: "custom_links",
      type: "Array<WidgetCustomLink>",
    },
    requests: {
      type: "Array<ToplistWidgetRequest>",
      required: true,
    },
    time: {
      type: "WidgetTime",
    },
    title: {
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
      type: "ToplistWidgetDefinitionType",
      required: true,
    },
  };
}
