import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { JiraIssueCreateData } from "./JiraIssueCreateData";

/**
 * Jira issue creation request
 */
export class JiraIssueCreateRequest {
  /**
   * Jira issue creation data
   */
  "data": JiraIssueCreateData;
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
      type: "JiraIssueCreateData",
      required: true,
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
    return JiraIssueCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
