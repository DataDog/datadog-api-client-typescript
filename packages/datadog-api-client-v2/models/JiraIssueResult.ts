/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Jira issue information
 */
export class JiraIssueResult {
  /**
   * Jira issue ID
   */
  "issueId"?: string;
  /**
   * Jira issue key
   */
  "issueKey"?: string;
  /**
   * Jira issue URL
   */
  "issueUrl"?: string;
  /**
   * Jira project key
   */
  "projectKey"?: string;

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
    projectKey: {
      baseName: "project_key",
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
    return JiraIssueResult.attributeTypeMap;
  }

  public constructor() {}
}
