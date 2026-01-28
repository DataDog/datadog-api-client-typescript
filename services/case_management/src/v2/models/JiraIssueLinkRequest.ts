import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { JiraIssueLinkData } from "./JiraIssueLinkData";

/**
 * Jira issue link request
 */
export class JiraIssueLinkRequest {
  /**
   * Jira issue link data
   */
  "data": JiraIssueLinkData;
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
      type: "JiraIssueLinkData",
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
    return JiraIssueLinkRequest.attributeTypeMap;
  }

  public constructor() {}
}
