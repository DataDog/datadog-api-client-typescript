/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Result of the Jira issue creation.
 */
export class FindingJiraIssueResult {
  /**
   * Account ID of the Jira issue.
   */
  "accountId"?: string;
  /**
   * Unique identifier of the Jira issue.
   */
  "issueId"?: string;
  /**
   * Key of the Jira issue.
   */
  "issueKey"?: string;
  /**
   * URL of the Jira issue.
   */
  "issueUrl"?: string;

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
    accountId: {
      baseName: "account_id",
      type: "string",
    },
    issueId: {
      baseName: "issue_id",
      type: "string",
    },
    issueKey: {
      baseName: "issue_key",
      type: "string",
    },
    issueUrl: {
      baseName: "issue_url",
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
    return FindingJiraIssueResult.attributeTypeMap;
  }

  public constructor() {}
}
