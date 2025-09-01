import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IssueCaseJiraIssueResult } from "./IssueCaseJiraIssueResult";

/**
 * Jira issue of the case.
 */
export class IssueCaseJiraIssue {
  /**
   * Contains the identifiers and URL for a successfully created Jira issue.
   */
  "result"?: IssueCaseJiraIssueResult;
  /**
   * Creation status of the Jira issue.
   */
  "status"?: string;
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
    result: {
      baseName: "result",
      type: "IssueCaseJiraIssueResult",
    },
    status: {
      baseName: "status",
      type: "string",
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
    return IssueCaseJiraIssue.attributeTypeMap;
  }

  public constructor() {}
}
