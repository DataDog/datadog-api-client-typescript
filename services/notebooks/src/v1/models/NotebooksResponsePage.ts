import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Pagination metadata returned by the API.
 */
export class NotebooksResponsePage {
  /**
   * The total number of notebooks that would be returned if the request was not filtered by `start` and `count` parameters.
   */
  "totalCount"?: number;
  /**
   * The total number of notebooks returned.
   */
  "totalFilteredCount"?: number;
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
    totalCount: {
      baseName: "total_count",
      type: "number",
      format: "int64",
    },
    totalFilteredCount: {
      baseName: "total_filtered_count",
      type: "number",
      format: "int64",
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
    return NotebooksResponsePage.attributeTypeMap;
  }

  public constructor() {}
}
