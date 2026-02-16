import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { JiraIssueFinding } from "./JiraIssueFinding";

export class JiraIssueDataMeta {
  "findings"?: Array<JiraIssueFinding>;
  "vulnerabilities"?: Array<JiraIssueFinding>;
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
    findings: {
      baseName: "findings",
      type: "Array<JiraIssueFinding>",
    },
    vulnerabilities: {
      baseName: "vulnerabilities",
      type: "Array<JiraIssueFinding>",
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
    return JiraIssueDataMeta.attributeTypeMap;
  }

  public constructor() {}
}
