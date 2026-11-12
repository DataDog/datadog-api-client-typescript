import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AgentHealthIssueAttributes } from "./AgentHealthIssueAttributes";
import { AgentHealthIssueResourceType } from "./AgentHealthIssueResourceType";

/**
 * An open Agent Health issue.
 */
export class AgentHealthIssueData {
  /**
   * Attributes of an open Agent Health issue.
   */
  "attributes": AgentHealthIssueAttributes;
  /**
   * The unique identifier of the issue.
   */
  "id": string;
  /**
   * The Agent Health issue resource type.
   */
  "type": AgentHealthIssueResourceType;
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
      type: "AgentHealthIssueAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "AgentHealthIssueResourceType",
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
    return AgentHealthIssueData.attributeTypeMap;
  }

  public constructor() {}
}
