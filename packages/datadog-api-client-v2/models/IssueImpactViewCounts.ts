/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap, Int64 } from "../../datadog-api-client-common/util";

/**
 * Distinct users, accounts, sessions, and view instances on a view. `affected` counts only those with the issue's
 * errors. `baseline` counts all users, accounts, sessions, and view instances on the view in the time window. It
 * is absent when RUM has no data for the view.
 */
export class IssueImpactViewCounts {
  /**
   * Number of distinct accounts.
   */
  "accounts": Int64;
  /**
   * Number of distinct sessions.
   */
  "sessions": Int64;
  /**
   * Number of distinct users.
   */
  "users": Int64;
  /**
   * Number of distinct view instances.
   */
  "views": Int64;

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
    accounts: {
      baseName: "accounts",
      type: "number",
      required: true,
      format: "int64",
    },
    sessions: {
      baseName: "sessions",
      type: "number",
      required: true,
      format: "int64",
    },
    users: {
      baseName: "users",
      type: "number",
      required: true,
      format: "int64",
    },
    views: {
      baseName: "views",
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
    return IssueImpactViewCounts.attributeTypeMap;
  }

  public constructor() {}
}
