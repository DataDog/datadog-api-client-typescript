import { AttributeTypeMap } from "@datadog/datadog-api-client";


/**
 * Pagination metadata for a CSM settings list response.
 */
export class CsmSettingsMeta {
  /**
   * The current page index (zero-based).
   */
  "pageIndex": number;
  /**
   * The number of resources returned per page.
   */
  "pageSize": number;
  /**
   * The total number of resources matching the filter criteria.
   */
  "totalFiltered": number;
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
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CsmSettingsMeta.attributeTypeMap;
  }

  public constructor() {}
}
