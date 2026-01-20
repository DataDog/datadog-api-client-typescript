import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { JiraAccountData } from "./JiraAccountData";
import { JiraIssueTemplateData } from "./JiraIssueTemplateData";

/**
 * Response containing a single Jira issue template
 */
export class JiraIssueTemplateResponse {
  /**
   * Data object for a Jira issue template
   */
  "data": JiraIssueTemplateData;
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
      type: "JiraIssueTemplateData",
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
    return JiraIssueTemplateResponse.attributeTypeMap;
  }

  public constructor() {}
}
