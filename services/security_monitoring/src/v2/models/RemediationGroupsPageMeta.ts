import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Pagination of the search.
 */
export class RemediationGroupsPageMeta {
  /**
   * Page number, starting at 1.
   */
  "number": number;
  /**
   * Page size.
   */
  "size": number;
  /**
   * Number of groups that match the search across all pages.
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
    number: {
      baseName: "number",
      type: "number",
      required: true,
      format: "int64",
    },
    size: {
      baseName: "size",
      type: "number",
      required: true,
      format: "int64",
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
    return RemediationGroupsPageMeta.attributeTypeMap;
  }

  public constructor() {}
}
