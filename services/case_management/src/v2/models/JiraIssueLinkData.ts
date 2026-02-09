import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { JiraIssueLinkAttributes } from "./JiraIssueLinkAttributes";
import { JiraIssueResourceType } from "./JiraIssueResourceType";

/**
 * Jira issue link data
 */
export class JiraIssueLinkData {
  /**
   * Jira issue link attributes
   */
  "attributes": JiraIssueLinkAttributes;
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
      type: "JiraIssueLinkAttributes",
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
    return JiraIssueLinkData.attributeTypeMap;
  }

  public constructor() {}
}
