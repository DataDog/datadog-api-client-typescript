import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TreeMapColorBy } from "./TreeMapColorBy";
import { TreeMapGroupBy } from "./TreeMapGroupBy";
import { TreeMapSizeBy } from "./TreeMapSizeBy";
import { TreeMapWidgetDefinitionType } from "./TreeMapWidgetDefinitionType";
import { TreeMapWidgetRequest } from "./TreeMapWidgetRequest";
import { WidgetCustomLink } from "./WidgetCustomLink";
import { WidgetTime } from "./WidgetTime";

/**
 * The treemap visualization enables you to display hierarchical and nested data. It is well suited for queries that describe part-whole relationships, such as resource usage by availability zone, data center, or team.
 */
export class TreeMapWidgetDefinition {
  /**
   * (deprecated) The attribute formerly used to determine color in the widget.
   */
  "colorBy"?: TreeMapColorBy;
  /**
   * List of custom links.
   */
  "customLinks"?: Array<WidgetCustomLink>;
  /**
   * (deprecated) The attribute formerly used to group elements in the widget.
   */
  "groupBy"?: TreeMapGroupBy;
  /**
   * List of treemap widget requests.
   */
  "requests": [TreeMapWidgetRequest];
  /**
   * (deprecated) The attribute formerly used to determine size in the widget.
   */
  "sizeBy"?: TreeMapSizeBy;
  /**
   * Time setting for the widget.
   */
  "time"?: WidgetTime;
  /**
   * Title of your widget.
   */
  "title"?: string;
  /**
   * Type of the treemap widget.
   */
  "type": TreeMapWidgetDefinitionType;
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
    colorBy: {
      baseName: "color_by",
      type: "TreeMapColorBy",
    },
    customLinks: {
      baseName: "custom_links",
      type: "Array<WidgetCustomLink>",
    },
    groupBy: {
      baseName: "group_by",
      type: "TreeMapGroupBy",
    },
    requests: {
      baseName: "requests",
      type: "[TreeMapWidgetRequest]",
      required: true,
    },
    sizeBy: {
      baseName: "size_by",
      type: "TreeMapSizeBy",
    },
    time: {
      baseName: "time",
      type: "WidgetTime",
    },
    title: {
      baseName: "title",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "TreeMapWidgetDefinitionType",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return TreeMapWidgetDefinition.attributeTypeMap;
  }

  public constructor() {}
}
