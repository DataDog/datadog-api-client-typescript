import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { WidgetFieldSort } from "./WidgetFieldSort";

/**
 * Updated SLO List widget.
 */
export class SLOListWidgetQuery {
  /**
   * Maximum number of results to display in the table.
   */
  "limit"?: number;
  /**
   * Widget query.
   */
  "queryString": string;
  /**
   * Options for sorting results.
   */
  "sort"?: Array<WidgetFieldSort>;
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
    limit: {
      baseName: "limit",
      type: "number",
      format: "int64",
    },
    queryString: {
      baseName: "query_string",
      type: "string",
      required: true,
    },
    sort: {
      baseName: "sort",
      type: "Array<WidgetFieldSort>",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SLOListWidgetQuery.attributeTypeMap;
  }

  public constructor() {}
}
