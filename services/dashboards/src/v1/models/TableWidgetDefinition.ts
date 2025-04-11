import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TableWidgetDefinitionType } from "./TableWidgetDefinitionType";
import { TableWidgetHasSearchBar } from "./TableWidgetHasSearchBar";
import { TableWidgetRequest } from "./TableWidgetRequest";
import { WidgetCustomLink } from "./WidgetCustomLink";
import { WidgetTextAlign } from "./WidgetTextAlign";
import { WidgetTime } from "./WidgetTime";

/**
 * The table visualization is available on timeboards and screenboards. It displays columns of metrics grouped by tag key.
 */
export class TableWidgetDefinition {
  /**
   * List of custom links.
   */
  "customLinks"?: Array<WidgetCustomLink>;
  /**
   * Controls the display of the search bar.
   */
  "hasSearchBar"?: TableWidgetHasSearchBar;
  /**
   * Widget definition.
   */
  "requests": Array<TableWidgetRequest>;
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
   * Type of the table widget.
   */
  "type": TableWidgetDefinitionType;
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
    hasSearchBar: {
      baseName: "has_search_bar",
      type: "TableWidgetHasSearchBar",
    },
    requests: {
      baseName: "requests",
      type: "Array<TableWidgetRequest>",
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
      type: "TableWidgetDefinitionType",
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
    return TableWidgetDefinition.attributeTypeMap;
  }

  public constructor() {}
}
