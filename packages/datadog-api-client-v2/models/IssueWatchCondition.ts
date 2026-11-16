/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IssueWatchConditionKind } from "./IssueWatchConditionKind";

import { AttributeTypeMap, Int64 } from "../../datadog-api-client-common/util";

/**
 * Condition that triggers the watch action. The fields that are set depend on `kind`:
 * `OCCURRENCES` uses `threshold`, `CARDINALITY` uses `threshold` and `projection`,
 * `ELAPSED_TIME` uses `duration`, and `ANY` and `ALL` use `operands`.
 */
export class IssueWatchCondition {
  /**
   * Time that must elapse from when the watch started, as a Go duration string, such as `24h`, or `168h` for a
   * week.
   */
  "duration"?: string;
  /**
   * Kind of watch condition.
   */
  "kind": IssueWatchConditionKind;
  /**
   * Nested conditions combined by `ANY` or `ALL`.
   */
  "operands"?: Array<IssueWatchCondition>;
  /**
   * Attributes whose distinct values `CARDINALITY` counts, in search syntax: `@` for attributes, such as
   * `@usr.id` or `@account.id`, and no prefix for tags and reserved fields, such as `org_id` or `service`.
   * Only use attributes that the issue's errors carry: a condition on an attribute they don't carry is never
   * met.
   */
  "projection"?: Array<string>;
  /**
   * Number of new occurrences, or of distinct values for `CARDINALITY`, that meets the condition, counted from
   * when the watch started.
   */
  "threshold"?: Int64;

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
    duration: {
      baseName: "duration",
      type: "string",
    },
    kind: {
      baseName: "kind",
      type: "IssueWatchConditionKind",
      required: true,
    },
    operands: {
      baseName: "operands",
      type: "Array<IssueWatchCondition>",
    },
    projection: {
      baseName: "projection",
      type: "Array<string>",
    },
    threshold: {
      baseName: "threshold",
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
    return IssueWatchCondition.attributeTypeMap;
  }

  public constructor() {}
}
