/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap, Int64 } from "../../datadog-api-client-common/util";

/**
 * Counts for the matching Agent Health issues.
 */
export class AgentHealthIssuesResponsePage {
  /**
   * The number of open issues matching the filters in each issue-type group.
   */
  "countsByIssueType": { [key: string]: Int64 };
  /**
   * The total number of open issues matching the filters.
   */
  "totalCount": Int64;

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
    countsByIssueType: {
      baseName: "counts_by_issue_type",
      type: "{ [key: string]: number; }",
      required: true,
      format: "int64",
    },
    totalCount: {
      baseName: "total_count",
      type: "number",
      required: true,
      format: "int64",
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
    return AgentHealthIssuesResponsePage.attributeTypeMap;
  }

  public constructor() {}
}
