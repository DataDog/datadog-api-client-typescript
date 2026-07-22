/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IssueCaseJiraIssueResult } from "./IssueCaseJiraIssueResult";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Jira issue of the case.
*/
export class IssueCaseJiraIssue {
  /**
   * Error message set when the Jira issue creation fails.
  */
  "errorMessage"?: string;
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
  "additionalProperties"?: { [key: string]: any; };

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    "errorMessage": {
      "baseName": "error_message",
      "type": "string",
    },
    "result": {
      "baseName": "result",
      "type": "IssueCaseJiraIssueResult",
    },
    "status": {
      "baseName": "status",
      "type": "string",
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

  public constructor() {











  }
}









