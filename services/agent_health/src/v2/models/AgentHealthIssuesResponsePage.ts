import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Pagination counts for the Agent Health issues.
 */
export class AgentHealthIssuesResponsePage {
  /**
   * The total number of open issues in the organization, ignoring filters.
   */
  "totalCount": number;
  /**
   * The total number of open issues matching the filters, across all pages.
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
    totalCount: {
      baseName: "total_count",
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
    return AgentHealthIssuesResponsePage.attributeTypeMap;
  }

  public constructor() {}
}
