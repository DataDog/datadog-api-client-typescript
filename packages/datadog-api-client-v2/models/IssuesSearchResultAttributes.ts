/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap, Int64 } from "../../datadog-api-client-common/util";

/**
 * Object containing the information of a search result.
 */
export class IssuesSearchResultAttributes {
  /**
   * Count of sessions impacted by the issue over the queried time window.
   */
  "impactedSessions"?: Int64;
  /**
   * Count of users impacted by the issue over the queried time window.
   */
  "impactedUsers"?: Int64;
  /**
   * Total count of errors that match the issue over the queried time window.
   */
  "totalCount"?: Int64;

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
    impactedSessions: {
      baseName: "impacted_sessions",
      type: "number",
      format: "int64",
    },
    impactedUsers: {
      baseName: "impacted_users",
      type: "number",
      format: "int64",
    },
    totalCount: {
      baseName: "total_count",
      type: "number",
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
    return IssuesSearchResultAttributes.attributeTypeMap;
  }

  public constructor() {}
}
