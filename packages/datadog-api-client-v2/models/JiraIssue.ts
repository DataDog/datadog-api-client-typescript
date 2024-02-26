/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { Case3rdPartyTicketStatus } from "./Case3rdPartyTicketStatus";
import { JiraIssueResult } from "./JiraIssueResult";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return JiraIssue.attributeTypeMap;
  }

  public constructor() {}
}
