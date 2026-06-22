import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RemediationPullRequestStatus } from "./RemediationPullRequestStatus";

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
