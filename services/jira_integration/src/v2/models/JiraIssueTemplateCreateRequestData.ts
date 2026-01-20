import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { JiraIssueTemplateCreateRequestAttributes } from "./JiraIssueTemplateCreateRequestAttributes";
import { JiraIssueTemplateType } from "./JiraIssueTemplateType";

/**
 * Data object for creating a Jira issue template
 */
export class JiraIssueTemplateCreateRequestData {
  /**
   * Attributes for creating a Jira issue template
   */
  "attributes"?: JiraIssueTemplateCreateRequestAttributes;
  /**
   * Type identifier for Jira issue template resources
   */
  "type"?: JiraIssueTemplateType;
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
      type: "JiraIssueTemplateCreateRequestAttributes",
    },
    type: {
      baseName: "type",
      type: "JiraIssueTemplateType",
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
    return JiraIssueTemplateCreateRequestData.attributeTypeMap;
  }

  public constructor() {}
}
