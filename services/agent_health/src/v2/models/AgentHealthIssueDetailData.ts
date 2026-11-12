import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AgentHealthIssueDetailAttributes } from "./AgentHealthIssueDetailAttributes";
import { AgentHealthIssueResourceType } from "./AgentHealthIssueResourceType";

/**
 * An open Agent Health issue with available remediation.
 */
export class AgentHealthIssueDetailData {
  /**
   * Attributes of an open Agent Health issue, including available remediation.
   */
  "attributes": AgentHealthIssueDetailAttributes;
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
      type: "AgentHealthIssueDetailAttributes",
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
    return AgentHealthIssueDetailData.attributeTypeMap;
  }

  public constructor() {}
}
