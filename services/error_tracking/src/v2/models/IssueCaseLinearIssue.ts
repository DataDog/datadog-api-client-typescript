import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IssueCaseLinearIssueResult } from "./IssueCaseLinearIssueResult";

/**
 * Linear issue of the case.
 */
export class IssueCaseLinearIssue {
  /**
   * Error message set when the Linear issue creation fails.
   */
  "errorMessage"?: string;
  /**
   * Contains the identifiers and URL for a successfully created Linear issue.
   */
  "result"?: IssueCaseLinearIssueResult;
  /**
   * Creation status of the Linear issue.
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
    errorMessage: {
      baseName: "error_message",
      type: "string",
    },
    result: {
      baseName: "result",
      type: "IssueCaseLinearIssueResult",
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
    return IssueCaseLinearIssue.attributeTypeMap;
  }

  public constructor() {}
}
