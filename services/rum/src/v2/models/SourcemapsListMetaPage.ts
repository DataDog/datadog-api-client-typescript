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
   * Total number of source maps matching the filter criteria.
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
