import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Pagination and findings count information.
 */
export class ListFindingsPage {
  /**
   * The cursor used to paginate requests.
   */
  "cursor"?: string;
  /**
   * The total count of findings after the filter has been applied.
   */
  "totalFilteredCount"?: number;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    cursor: {
      baseName: "cursor",
      type: "string",
    },
    totalFilteredCount: {
      baseName: "total_filtered_count",
      type: "number",
      format: "int64",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ListFindingsPage.attributeTypeMap;
  }

  public constructor() {}
}
