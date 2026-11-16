import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Distinct users, accounts, sessions, and view instances on a view. `affected` counts only those with the issue's
 * errors. `baseline` counts all users, accounts, sessions, and view instances on the view in the time window. It
 * is absent when RUM has no data for the view.
 */
export class IssueImpactViewCounts {
  /**
   * Number of distinct accounts.
   */
  "accounts": number;
  /**
   * Number of distinct sessions.
   */
  "sessions": number;
  /**
   * Number of distinct users.
   */
  "users": number;
  /**
   * Number of distinct view instances.
   */
  "views": number;
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
    accounts: {
      baseName: "accounts",
      type: "number",
      required: true,
      format: "int64",
    },
    sessions: {
      baseName: "sessions",
      type: "number",
      required: true,
      format: "int64",
    },
    users: {
      baseName: "users",
      type: "number",
      required: true,
      format: "int64",
    },
    views: {
      baseName: "views",
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
    return IssueImpactViewCounts.attributeTypeMap;
  }

  public constructor() {}
}
