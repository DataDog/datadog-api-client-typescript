/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap, Int64 } from "../../datadog-api-client-common/util";

/**
 * An issue contributing to drop-off at the target step.
 */
export class ProductAnalyticsJourneyDropOffIssue {
  /**
   * Number of errors attributed to this issue.
   */
  "errorCount": Int64;
  /**
   * Identifier of the issue.
   */
  "issueId": string;
  /**
   * Number of sessions affected by this issue.
   */
  "sessionCount": Int64;

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
    errorCount: {
      baseName: "error_count",
      type: "number",
      required: true,
      format: "int64",
    },
    issueId: {
      baseName: "issue_id",
      type: "string",
      required: true,
    },
    sessionCount: {
      baseName: "session_count",
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
    return ProductAnalyticsJourneyDropOffIssue.attributeTypeMap;
  }

  public constructor() {}
}
