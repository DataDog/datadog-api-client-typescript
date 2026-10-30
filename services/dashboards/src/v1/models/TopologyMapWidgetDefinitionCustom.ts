import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TopologyMapInlineData } from "./TopologyMapInlineData";
import { TopologyMapLayout } from "./TopologyMapLayout";
import { TopologyMapWidgetDefinitionType } from "./TopologyMapWidgetDefinitionType";
import { TopologyRequestCustom } from "./TopologyRequestCustom";
import { WidgetCustomLink } from "./WidgetCustomLink";
import { WidgetTextAlign } from "./WidgetTextAlign";
import { WidgetTime } from "./WidgetTime";

/**
 * Custom topology map widget. Renders nodes and edges from inline `data` and from scalar `requests`. There is one node for each node ID found in `data.nodes`, `data.edges`, and `requests`. When `data` and several requests set the same field on the same node (such as `title` or `values[0]`), the last non-null value wins.
 */
export class TopologyMapWidgetDefinitionCustom {
  /**
   * List of custom links.
   */
  "customLinks"?: Array<WidgetCustomLink>;
  /**
   * Static nodes and edges, stored in columns. Within a table, every column must have the same number of values and a unique `id`.
   */
  "data"?: TopologyMapInlineData;
  /**
   * The description of the widget.
   */
  "description"?: string;
  /**
   * Algorithm that positions nodes and edges. The `hierarchical` layout places nodes in ranks so edges flow in one direction.
   */
  "layout": TopologyMapLayout;
  /**
   * List of scalar requests that supply node data. Can be empty.
   */
  "requests": Array<TopologyRequestCustom>;
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
    data: {
      baseName: "data",
      type: "TopologyMapInlineData",
    },
    description: {
      baseName: "description",
      type: "string",
    },
    layout: {
      baseName: "layout",
      type: "TopologyMapLayout",
      required: true,
    },
    requests: {
      baseName: "requests",
      type: "Array<TopologyRequestCustom>",
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
    return TopologyMapWidgetDefinitionCustom.attributeTypeMap;
  }

  public constructor() {}
}
