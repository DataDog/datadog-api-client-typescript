import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Pagination metadata for a page of cost recommendations.
 */
export class RecommendationsPageMetaPage {
  /**
   * The filter expression that was applied to produce this page.
   */
  "filter"?: string;
  /**
   * Opaque token used to fetch the next page; absent on the last page.
   */
  "nextPageToken"?: string;
  /**
   * Number of items returned in this page (1–10000).
   */
  "pageSize"?: number;
  /**
   * Pagination token echoed back from the request.
   */
  "pageToken"?: string;
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
    filter: {
      baseName: "filter",
      type: "string",
    },
    nextPageToken: {
      baseName: "next_page_token",
      type: "string",
    },
    pageSize: {
      baseName: "page_size",
      type: "number",
      format: "int32",
    },
    pageToken: {
      baseName: "page_token",
      type: "string",
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
    return RecommendationsPageMetaPage.attributeTypeMap;
  }

  public constructor() {}
}
