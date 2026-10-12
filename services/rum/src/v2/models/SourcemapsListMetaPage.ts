import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Page information for the source maps list response.
 */
export class SourcemapsListMetaPage {
  /**
   * Whether there are more results available beyond the current page.
   */
  "hasMoreResults": boolean;
  /**
   * Cursor for the next page of a JavaScript cursor-based listing. Pass
   * this value as `page[after]` with the same search mode and filters.
   * Only returned when another page is available.
   */
  "nextCursor"?: string;
  /**
   * Total number of matching source maps for legacy page-number pagination.
   * Cursor-based listings do not compute a total; this field may be zero
   * even when records are returned. Use `has_more_results` to continue.
   */
  "totalFilteredCount": number;
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
    hasMoreResults: {
      baseName: "has_more_results",
      type: "boolean",
      required: true,
    },
    nextCursor: {
      baseName: "next_cursor",
      type: "string",
    },
    totalFilteredCount: {
      baseName: "total_filtered_count",
      type: "number",
      required: true,
      format: "int64",
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
    return SourcemapsListMetaPage.attributeTypeMap;
  }

  public constructor() {}
}
