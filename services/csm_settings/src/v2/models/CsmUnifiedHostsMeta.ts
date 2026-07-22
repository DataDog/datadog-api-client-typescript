import { AttributeTypeMap } from "@datadog/datadog-api-client";


/**
 * Pagination metadata for a unified hosts list response.
 */
export class CsmUnifiedHostsMeta {
  /**
   * The current page index (zero-based).
   */
  "pageIndex": number;
  /**
   * The number of hosts returned per page.
   */
  "pageSize": number;
  /**
   * The total number of hosts matching the filter criteria.
   */
  "totalFiltered": number;
  /**
   * The total number of pages available.
   */
  "totalPages": number;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    pageIndex: {
      baseName: "page_index",
      type: "number",
      required: true,
      format: "int64",
    },
    pageSize: {
      baseName: "page_size",
      type: "number",
      required: true,
      format: "int64",
    },
    totalFiltered: {
      baseName: "total_filtered",
      type: "number",
      required: true,
      format: "int64",
    },
    totalPages: {
      baseName: "total_pages",
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
    return CsmUnifiedHostsMeta.attributeTypeMap;
  }

  public constructor() {}
}
