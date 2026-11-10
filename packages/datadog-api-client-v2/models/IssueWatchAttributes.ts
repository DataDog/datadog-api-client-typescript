/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IssueWatchAction } from "./IssueWatchAction";
import { IssueWatchCondition } from "./IssueWatchCondition";
import { IssueWatchStatus } from "./IssueWatchStatus";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Object containing the information of a watch.
 */
export class IssueWatchAttributes {
  /**
   * Action applied to the issue when the watch condition is met.
   */
  "action"?: IssueWatchAction;
  /**
   * Condition that triggers the watch action. The fields that are set depend on `kind`:
   * `OCCURRENCES` uses `threshold`, `CARDINALITY` uses `threshold` and `projection`,
   * `ELAPSED_TIME` uses `duration`, and `ANY` and `ALL` use `operands`.
   */
  "condition"?: IssueWatchCondition;
  /**
   * Timestamp of when the watch started.
   */
  "startedAt"?: Date;
  /**
   * Status of the watch.
   */
  "status"?: IssueWatchStatus;

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
    action: {
      baseName: "action",
      type: "IssueWatchAction",
    },
    condition: {
      baseName: "condition",
      type: "IssueWatchCondition",
    },
    startedAt: {
      baseName: "started_at",
      type: "Date",
      format: "date-time",
    },
    status: {
      baseName: "status",
      type: "IssueWatchStatus",
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
    return IssueWatchAttributes.attributeTypeMap;
  }

  public constructor() {}
}
