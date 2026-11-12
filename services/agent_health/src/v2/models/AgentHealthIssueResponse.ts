import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AgentHealthIssueDetailData } from "./AgentHealthIssueDetailData";

/**
 * A response containing an open Agent Health issue and available remediation.
 */
export class AgentHealthIssueResponse {
  /**
   * An open Agent Health issue with available remediation.
   */
  "data": AgentHealthIssueDetailData;
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
      type: "AgentHealthIssueDetailData",
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
    return AgentHealthIssueResponse.attributeTypeMap;
  }

  public constructor() {}
}
