import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AgentHealthIssueData } from "./AgentHealthIssueData";
import { AgentHealthIssuesResponseMeta } from "./AgentHealthIssuesResponseMeta";

/**
 * A paginated response containing open Agent Health issues.
 */
export class AgentHealthIssuesResponse {
  /**
   * The open Agent Health issues on this page.
   */
  "data": Array<AgentHealthIssueData>;
  /**
   * Pagination metadata for the matching Agent Health issues.
   */
  "meta": AgentHealthIssuesResponseMeta;
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
      type: "Array<AgentHealthIssueData>",
      required: true,
    },
    meta: {
      baseName: "meta",
      type: "AgentHealthIssuesResponseMeta",
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
    return AgentHealthIssuesResponse.attributeTypeMap;
  }

  public constructor() {}
}
