import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { JiraIssueTemplateCreateRequestData } from "./JiraIssueTemplateCreateRequestData";

/**
 * Request to create a Jira issue template
 */
export class JiraIssueTemplateCreateRequest {
  /**
   * Data object for creating a Jira issue template
   */
  "data"?: JiraIssueTemplateCreateRequestData;
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
      type: "JiraIssueTemplateCreateRequestData",
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
    return JiraIssueTemplateCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
