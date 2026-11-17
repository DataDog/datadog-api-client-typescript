import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * An issue contributing to drop-off at the target step.
 */
export class ProductAnalyticsJourneyDropOffIssue {
  /**
   * Number of errors attributed to this issue.
   */
  "errorCount": number;
  /**
   * Identifier of the issue.
   */
  "issueId": string;
  /**
   * Number of sessions affected by this issue.
   */
  "sessionCount": number;
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
    errorCount: {
      baseName: "error_count",
      type: "number",
      required: true,
      format: "int64",
    },
    issueId: {
      baseName: "issue_id",
      type: "string",
      required: true,
    },
    sessionCount: {
      baseName: "session_count",
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
    return ProductAnalyticsJourneyDropOffIssue.attributeTypeMap;
  }

  public constructor() {}
}
