/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TopologyMapWidgetDefinitionType } from "./TopologyMapWidgetDefinitionType";
import { TopologyRequestDataStreams } from "./TopologyRequestDataStreams";
import { WidgetCustomLink } from "./WidgetCustomLink";
import { WidgetTextAlign } from "./WidgetTextAlign";
import { WidgetTime } from "./WidgetTime";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Topology map widget backed by the data streams data source.
 */
export class TopologyMapWidgetDefinitionDataStreams {
  /**
   * List of custom links.
   */
  "customLinks"?: Array<WidgetCustomLink>;
  /**
   * The description of the widget.
   */
  "description"?: string;
  /**
   * One Topology request.
   */
  "requests": Array<TopologyRequestDataStreams>;
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
   * Type of the topology map widget.
   */
  "type": TopologyMapWidgetDefinitionType;

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
    description: {
      baseName: "description",
      type: "string",
    },
    requests: {
      baseName: "requests",
      type: "Array<TopologyRequestDataStreams>",
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
      type: "TopologyMapWidgetDefinitionType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return TopologyMapWidgetDefinitionDataStreams.attributeTypeMap;
  }

  public constructor() {}
}
