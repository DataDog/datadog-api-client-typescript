/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IssuePullRequestReason } from "./IssuePullRequestReason";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Object containing the information of a pull request linked to an issue.
 */
export class IssuePullRequestAttributes {
  /**
   * Timestamp of when the pull request was closed. Omitted if the pull request is not closed.
   */
  "closedAt"?: Date;
  /**
   * Timestamp of when the pull request was linked to the issue.
   */
  "linkedAt"?: Date;
  /**
   * Timestamp of when the pull request was merged. Omitted if the pull request is not merged.
   */
  "mergedAt"?: Date;
  /**
   * Why the pull request is linked to the issue. `fix` means the pull request fixes the issue, and `trigger` means the pull request introduced the issue.
   */
  "reason"?: IssuePullRequestReason;
  /**
   * URL of the pull request.
   */
  "url"?: string;

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
    closedAt: {
      baseName: "closed_at",
      type: "Date",
      format: "date-time",
    },
    linkedAt: {
      baseName: "linked_at",
      type: "Date",
      format: "date-time",
    },
    mergedAt: {
      baseName: "merged_at",
      type: "Date",
      format: "date-time",
    },
    reason: {
      baseName: "reason",
      type: "IssuePullRequestReason",
    },
    url: {
      baseName: "url",
      type: "string",
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
    return IssuePullRequestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
