import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AgentHealthIssuesResponsePage } from "./AgentHealthIssuesResponsePage";

/**
 * Aggregate counts for the matching Agent Health issues. Present only when `count_by=issue_type` is requested.
 */
export class AgentHealthIssuesResponseMeta {
  /**
   * Counts for the matching Agent Health issues.
   */
  "page": AgentHealthIssuesResponsePage;
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
    page: {
      baseName: "page",
      type: "AgentHealthIssuesResponsePage",
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
    return AgentHealthIssuesResponseMeta.attributeTypeMap;
  }

  public constructor() {}
}
