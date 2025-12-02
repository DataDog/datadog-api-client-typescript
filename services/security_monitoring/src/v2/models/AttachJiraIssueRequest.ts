import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AttachJiraIssueRequestData } from "./AttachJiraIssueRequestData";

/**
 * Request for attaching security findings to a Jira issue.
 */
export class AttachJiraIssueRequest {
  /**
   * Data of the Jira issue to attach security findings to.
   */
  "data"?: AttachJiraIssueRequestData;
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
    data: {
      baseName: "data",
      type: "AttachJiraIssueRequestData",
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
    return AttachJiraIssueRequest.attributeTypeMap;
  }

  public constructor() {}
}
