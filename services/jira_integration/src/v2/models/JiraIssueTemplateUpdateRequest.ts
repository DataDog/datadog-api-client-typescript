import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { JiraIssueTemplateUpdateRequestData } from "./JiraIssueTemplateUpdateRequestData";

/**
 * Request to update a Jira issue template
 */
export class JiraIssueTemplateUpdateRequest {
  /**
   * Data object for updating a Jira issue template
   */
  "data": JiraIssueTemplateUpdateRequestData;
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
      type: "JiraIssueTemplateUpdateRequestData",
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
    return JiraIssueTemplateUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
