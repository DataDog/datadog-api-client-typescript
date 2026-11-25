import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { HasSearchBar } from "./HasSearchBar";
import { QueryTableBackendDefinitionType } from "./QueryTableBackendDefinitionType";
import { QueryTableBackendRequest } from "./QueryTableBackendRequest";
import { WidgetCustomLink } from "./WidgetCustomLink";
import { WidgetTextAlign } from "./WidgetTextAlign";
import { WidgetTime } from "./WidgetTime";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class QueryTableBackendDefinition {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "autoHorizontalScrolling"?: boolean;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "customLinks"?: Array<WidgetCustomLink>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "description"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "hasSearchBar"?: HasSearchBar;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "notes"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "numStickyColumns"?: number;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "requests": Array<QueryTableBackendRequest>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "time"?: WidgetTime;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "title"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "titleAlign"?: WidgetTextAlign;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "titleSize"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "type": QueryTableBackendDefinitionType;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    autoHorizontalScrolling: {
      baseName: "auto_horizontal_scrolling",
      type: "boolean",
    },
    customLinks: {
      baseName: "custom_links",
      type: "Array<WidgetCustomLink>",
    },
    description: {
      baseName: "description",
      type: "string",
    },
    hasSearchBar: {
      baseName: "has_search_bar",
      type: "HasSearchBar",
    },
    notes: {
      baseName: "notes",
      type: "string",
    },
    numStickyColumns: {
      baseName: "num_sticky_columns",
      type: "number",
      format: "double",
    },
    requests: {
      baseName: "requests",
      type: "Array<QueryTableBackendRequest>",
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
      type: "QueryTableBackendDefinitionType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return QueryTableBackendDefinition.attributeTypeMap;
  }

  public constructor() {}
}
