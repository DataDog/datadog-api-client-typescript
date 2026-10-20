import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AgentHealthHostIssuesAttributes } from "./AgentHealthHostIssuesAttributes";
import { AgentHealthHostIssuesType } from "./AgentHealthHostIssuesType";

/**
 * Agent Health issue data for a resource.
 */
export class AgentHealthHostIssuesData {
  /**
   * Active Agent Health issues for a resource.
   */
  "attributes": AgentHealthHostIssuesAttributes;
  /**
   * The resource identifier.
   */
  "id": string;
  /**
   * The Agent Health issue resource type.
   */
  "type": AgentHealthHostIssuesType;
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
      type: "AgentHealthHostIssuesAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "AgentHealthHostIssuesType",
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
    return AgentHealthHostIssuesData.attributeTypeMap;
  }

  public constructor() {}
}
