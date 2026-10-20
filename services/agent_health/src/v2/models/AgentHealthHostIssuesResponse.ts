import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AgentHealthHostIssuesData } from "./AgentHealthHostIssuesData";

/**
 * Response containing the active Agent Health issues for a resource.
 */
export class AgentHealthHostIssuesResponse {
  /**
   * Agent Health issue data for a resource.
   */
  "data": AgentHealthHostIssuesData;
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
      type: "AgentHealthHostIssuesData",
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
    return AgentHealthHostIssuesResponse.attributeTypeMap;
  }

  public constructor() {}
}
