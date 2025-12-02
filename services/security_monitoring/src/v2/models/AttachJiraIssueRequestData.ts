import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AttachJiraIssueRequestDataAttributes } from "./AttachJiraIssueRequestDataAttributes";
import { AttachJiraIssueRequestDataRelationships } from "./AttachJiraIssueRequestDataRelationships";
import { JiraIssuesDataType } from "./JiraIssuesDataType";

/**
 * Data of the Jira issue to attach security findings to.
 */
export class AttachJiraIssueRequestData {
  /**
   * Attributes of the Jira issue to attach security findings to.
   */
  "attributes"?: AttachJiraIssueRequestDataAttributes;
  /**
   * The unique identifier of the Jira issue attachment request.
   */
  "id"?: string;
  /**
   * Relationships of the Jira issue to attach security findings to.
   */
  "relationships"?: AttachJiraIssueRequestDataRelationships;
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
      type: "AttachJiraIssueRequestDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    relationships: {
      baseName: "relationships",
      type: "AttachJiraIssueRequestDataRelationships",
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
    return AttachJiraIssueRequestData.attributeTypeMap;
  }

  public constructor() {}
}
