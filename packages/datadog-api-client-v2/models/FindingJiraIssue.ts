/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FindingJiraIssueResult } from "./FindingJiraIssueResult";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Jira issue associated with the case.
 */
export class FindingJiraIssue {
  /**
   * The error message if the Jira issue creation failed.
   */
  "errorMessage"?: string;
  /**
   * Result of the Jira issue creation.
   */
  "result"?: FindingJiraIssueResult;
  /**
   * The status of the Jira issue creation. Can be "COMPLETED" if the Jira issue was created successfully, or "FAILED" if the Jira issue creation failed.
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
      type: "FindingJiraIssueResult",
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
    return FindingJiraIssue.attributeTypeMap;
  }

  public constructor() {}
}
