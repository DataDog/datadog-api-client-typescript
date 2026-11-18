import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Counts for the matching Agent Health issues.
 */
export class AgentHealthIssuesResponsePage {
  /**
   * The number of open issues matching the filters in each issue-type group.
   */
  "countsByIssueType": { [key: string]: number };
  /**
   * The total number of open issues matching the filters.
   */
  "totalCount": number;
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
    countsByIssueType: {
      baseName: "counts_by_issue_type",
      type: "{ [key: string]: number; }",
      required: true,
    },
    totalCount: {
      baseName: "total_count",
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
