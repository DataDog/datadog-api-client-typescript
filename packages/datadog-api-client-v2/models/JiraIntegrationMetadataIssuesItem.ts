/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Item in the Jira integration metadata issue array.
*/
export class JiraIntegrationMetadataIssuesItem {
  /**
   * URL of issue's Jira account.
  */
  "account": string;
  /**
   * Jira issue's issue key.
  */
  "issueKey"?: string;
  /**
   * Jira issue's issue type.
  */
  "issuetypeId"?: string;
  /**
   * Jira issue's project keys.
  */
  "projectKey": string;
  /**
   * URL redirecting to the Jira issue.
  */
  "redirectUrl"?: string;

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
    "account": {
      "baseName": "account",
      "type": "string",
      "required": true,
    },
    "issueKey": {
      "baseName": "issue_key",
      "type": "string",
    },
    "issuetypeId": {
      "baseName": "issuetype_id",
      "type": "string",
    },
    "projectKey": {
      "baseName": "project_key",
      "type": "string",
      "required": true,
    },
    "redirectUrl": {
      "baseName": "redirect_url",
      "type": "string",
    },
    "additionalProperties": {
      "baseName": "additionalProperties",
      "type": "any",
    }
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {




    return JiraIntegrationMetadataIssuesItem.attributeTypeMap;

  }

  public constructor() {











  }
}









