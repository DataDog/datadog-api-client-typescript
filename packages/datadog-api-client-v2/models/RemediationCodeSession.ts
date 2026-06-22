/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RemediationPullRequestStatus } from "./RemediationPullRequestStatus";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A linked code session (for example, a pull request) for the investigation.
 */
export class RemediationCodeSession {
  /**
   * Code session ID.
   */
  "id"?: string;
  /**
   * Pull request status for a linked code session.
   */
  "pullRequestStatus"?: RemediationPullRequestStatus;

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
    id: {
      baseName: "id",
      type: "string",
    },
    pullRequestStatus: {
      baseName: "pull_request_status",
      type: "RemediationPullRequestStatus",
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
    return RemediationCodeSession.attributeTypeMap;
  }

  public constructor() {}
}
