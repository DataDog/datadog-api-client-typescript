import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TopologyMapWidgetDefinitionType } from "./TopologyMapWidgetDefinitionType";
import { TopologyRequest } from "./TopologyRequest";
import { WidgetCustomLink } from "./WidgetCustomLink";
import { WidgetTextAlign } from "./WidgetTextAlign";

/**
 * This widget displays a topology of nodes and edges for different data sources. It replaces the service map widget.
 */
export class TopologyMapWidgetDefinition {
  /**
   * List of custom links.
   */
  "customLinks"?: Array<WidgetCustomLink>;
  /**
   * One or more Topology requests.
   */
  "requests": Array<TopologyRequest>;
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
    customLinks: {
      baseName: "custom_links",
      type: "Array<WidgetCustomLink>",
    },
    requests: {
      baseName: "requests",
      type: "Array<TopologyRequest>",
      required: true,
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
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return TopologyMapWidgetDefinition.attributeTypeMap;
  }

  public constructor() {}
}
