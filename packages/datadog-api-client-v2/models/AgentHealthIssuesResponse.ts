/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AgentHealthIssueData } from "./AgentHealthIssueData";
import { AgentHealthIssuesResponseMeta } from "./AgentHealthIssuesResponseMeta";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A response containing open Agent Health issues.
 */
export class AgentHealthIssuesResponse {
  /**
   * The open Agent Health issues matching the request.
   */
  "data": Array<AgentHealthIssueData>;
  /**
   * Aggregate counts for the matching Agent Health issues. Present only when `count_by=issue_type` is requested.
   */
  "meta"?: AgentHealthIssuesResponseMeta;

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
