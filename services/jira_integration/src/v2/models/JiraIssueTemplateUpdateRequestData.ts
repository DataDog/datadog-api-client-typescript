import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { JiraIssueTemplateType } from "./JiraIssueTemplateType";
import { JiraIssueTemplateUpdateRequestAttributes } from "./JiraIssueTemplateUpdateRequestAttributes";

/**
 * Data object for updating a Jira issue template
 */
export class JiraIssueTemplateUpdateRequestData {
  /**
   * Attributes for updating a Jira issue template
   */
  "attributes": JiraIssueTemplateUpdateRequestAttributes;
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
      type: "JiraIssueTemplateUpdateRequestAttributes",
      required: true,
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
    return JiraIssueTemplateUpdateRequestData.attributeTypeMap;
  }

  public constructor() {}
}
