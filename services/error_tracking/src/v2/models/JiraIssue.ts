import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { Case3rdPartyTicketStatus } from "./Case3rdPartyTicketStatus";
import { JiraIssueResult } from "./JiraIssueResult";

/**
 * Jira issue attached to case
 */
export class JiraIssue {
  /**
   * Jira issue information
   */
  "result"?: JiraIssueResult;
  /**
   * Case status
   */
  "status"?: Case3rdPartyTicketStatus;
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
      type: "JiraIssueResult",
    },
    status: {
      baseName: "status",
      type: "Case3rdPartyTicketStatus",
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
    return JiraIssue.attributeTypeMap;
  }

  public constructor() {}
}
