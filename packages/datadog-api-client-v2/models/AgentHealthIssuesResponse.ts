/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AgentHealthIssueData } from "./AgentHealthIssueData";
import { AgentHealthIssuesResponseMeta } from "./AgentHealthIssuesResponseMeta";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
