import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { JiraIssueCreateAttributes } from "./JiraIssueCreateAttributes";
import { JiraIssueResourceType } from "./JiraIssueResourceType";

/**
 * Jira issue creation data
 */
export class JiraIssueCreateData {
  /**
   * Jira issue creation attributes
   */
  "attributes": JiraIssueCreateAttributes;
  /**
   * Jira issue resource type
   */
  "type": JiraIssueResourceType;
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
    attributes: {
      baseName: "attributes",
      type: "JiraIssueCreateAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "JiraIssueResourceType",
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
    return JiraIssueCreateData.attributeTypeMap;
  }

  public constructor() {}
}
