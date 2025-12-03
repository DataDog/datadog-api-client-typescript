import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreateJiraIssueRequestArrayIncluded } from "./CreateJiraIssueRequestArrayIncluded";
import { CreateJiraIssueRequestData } from "./CreateJiraIssueRequestData";

/**
 * List of requests to create Jira issues for security findings.
 */
export class CreateJiraIssueRequestArray {
  "data": Array<CreateJiraIssueRequestData>;
  "included"?: Array<CreateJiraIssueRequestArrayIncluded>;
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
      type: "Array<CreateJiraIssueRequestData>",
      required: true,
    },
    included: {
      baseName: "included",
      type: "Array<CreateJiraIssueRequestArrayIncluded>",
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
    return CreateJiraIssueRequestArray.attributeTypeMap;
  }

  public constructor() {}
}
