import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreateJiraIssueRequestDataAttributes } from "./CreateJiraIssueRequestDataAttributes";
import { CreateJiraIssueRequestDataRelationships } from "./CreateJiraIssueRequestDataRelationships";
import { JiraIssuesDataType } from "./JiraIssuesDataType";

/**
 * Data of the Jira issue to create.
 */
export class CreateJiraIssueRequestData {
  /**
   * Attributes of the Jira issue to create.
   */
  "attributes"?: CreateJiraIssueRequestDataAttributes;
  /**
   * Relationships of the Jira issue to create.
   */
  "relationships"?: CreateJiraIssueRequestDataRelationships;
  /**
   * Jira issues resource type.
   */
  "type": JiraIssuesDataType;
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
      type: "CreateJiraIssueRequestDataAttributes",
    },
    relationships: {
      baseName: "relationships",
      type: "CreateJiraIssueRequestDataRelationships",
    },
    type: {
      baseName: "type",
      type: "JiraIssuesDataType",
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
    return CreateJiraIssueRequestData.attributeTypeMap;
  }

  public constructor() {}
}
