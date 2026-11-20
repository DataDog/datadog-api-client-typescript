import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AdvancedQueryTableCellDisplayMode } from "./AdvancedQueryTableCellDisplayMode";
import { ConditionalFormats } from "./ConditionalFormats";
import { QueryTableColumnLink } from "./QueryTableColumnLink";
import { QueryTableDateFormat } from "./QueryTableDateFormat";
import { QueryTableProjectionDimensionDimension } from "./QueryTableProjectionDimensionDimension";
import { TextFormattingRule } from "./TextFormattingRule";
import { WidgetNumberFormat } from "./WidgetNumberFormat";
import { WidgetTextAlign } from "./WidgetTextAlign";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class QueryTableProjectionDimension {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "cellDisplayMode"?: AdvancedQueryTableCellDisplayMode;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "column": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "conditionalFormats"?: ConditionalFormats;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "dateFormat"?: QueryTableDateFormat;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "dimension": QueryTableProjectionDimensionDimension;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "isHidden"?: boolean;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "link"?: QueryTableColumnLink;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "numberFormat"?: WidgetNumberFormat;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "textAlign"?: WidgetTextAlign;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "textFormats"?: Array<TextFormattingRule>;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    cellDisplayMode: {
      baseName: "cell_display_mode",
      type: "AdvancedQueryTableCellDisplayMode",
    },
    column: {
      baseName: "column",
      type: "string",
      required: true,
    },
    conditionalFormats: {
      baseName: "conditional_formats",
      type: "ConditionalFormats",
    },
    dateFormat: {
      baseName: "date_format",
      type: "QueryTableDateFormat",
    },
    dimension: {
      baseName: "dimension",
      type: "QueryTableProjectionDimensionDimension",
      required: true,
    },
    isHidden: {
      baseName: "is_hidden",
      type: "boolean",
    },
    link: {
      baseName: "link",
      type: "QueryTableColumnLink",
    },
    numberFormat: {
      baseName: "number_format",
      type: "WidgetNumberFormat",
    },
    textAlign: {
      baseName: "text_align",
      type: "WidgetTextAlign",
    },
    textFormats: {
      baseName: "text_formats",
      type: "Array<TextFormattingRule>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return QueryTableProjectionDimension.attributeTypeMap;
  }

  public constructor() {}
}
