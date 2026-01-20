import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { JiraIssueTemplateDataAttributes } from "./JiraIssueTemplateDataAttributes";
import { JiraIssueTemplateDataRelationships } from "./JiraIssueTemplateDataRelationships";
import { JiraIssueTemplateType } from "./JiraIssueTemplateType";

/**
 * Data object for a Jira issue template
 */
export class JiraIssueTemplateData {
  /**
   * Attributes of a Jira issue template
   */
  "attributes": JiraIssueTemplateDataAttributes;
  /**
   * Unique identifier for the Jira issue template
   */
  "id": string;
  /**
   * Relationships of a Jira issue template
   */
  "relationships"?: JiraIssueTemplateDataRelationships;
  /**
   * Type identifier for Jira issue template resources
   */
  "type": JiraIssueTemplateType;
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
      type: "JiraIssueTemplateDataAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
    },
    relationships: {
      baseName: "relationships",
      type: "JiraIssueTemplateDataRelationships",
    },
    type: {
      baseName: "type",
      type: "JiraIssueTemplateType",
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
    return JiraIssueTemplateData.attributeTypeMap;
  }

  public constructor() {}
}
