import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { JiraAccountData } from "./JiraAccountData";

/**
 * Relationship to a Jira account
 */
export class JiraAccountRelationship {
  /**
   * Data object for a Jira account
   */
  "data": JiraAccountData;
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
      type: "JiraAccountData",
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
    return JiraAccountRelationship.attributeTypeMap;
  }

  public constructor() {}
}
