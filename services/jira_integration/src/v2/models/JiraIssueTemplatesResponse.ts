import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { JiraAccountData } from "./JiraAccountData";
import { JiraIssueTemplateData } from "./JiraIssueTemplateData";

/**
 * Response containing Jira issue templates
 */
export class JiraIssueTemplatesResponse {
  /**
   * Array of Jira issue template data objects
   */
  "data": Array<JiraIssueTemplateData>;
  /**
   * Array of Jira account data objects
   */
  "included"?: Array<JiraAccountData>;
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
      type: "Array<JiraIssueTemplateData>",
      required: true,
    },
    included: {
      baseName: "included",
      type: "Array<JiraAccountData>",
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
    return JiraIssueTemplatesResponse.attributeTypeMap;
  }

  public constructor() {}
}
