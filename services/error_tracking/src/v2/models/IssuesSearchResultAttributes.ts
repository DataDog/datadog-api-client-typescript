import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Object containing the information of a search result.
 */
export class IssuesSearchResultAttributes {
  /**
   * Count of sessions impacted by the issue over the queried time window.
   */
  "impactedSessions"?: number;
  /**
   * Count of users impacted by the issue over the queried time window.
   */
  "impactedUsers"?: number;
  /**
   * Total count of errors that match the issue over the queried time window.
   */
  "totalCount"?: number;
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
    impactedSessions: {
      baseName: "impacted_sessions",
      type: "number",
      format: "int64",
    },
    impactedUsers: {
      baseName: "impacted_users",
      type: "number",
      format: "int64",
    },
    totalCount: {
      baseName: "total_count",
      type: "number",
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
    return IssuesSearchResultAttributes.attributeTypeMap;
  }

  public constructor() {}
}
