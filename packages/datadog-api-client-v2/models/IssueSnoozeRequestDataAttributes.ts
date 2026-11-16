/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IssueWatchCondition } from "./IssueWatchCondition";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Object describing an issue snooze request.
 */
export class IssueSnoozeRequestDataAttributes {
  /**
   * Condition that triggers the watch action. The fields that are set depend on `kind`:
   * `OCCURRENCES` uses `threshold`, `CARDINALITY` uses `threshold` and `projection`,
   * `ELAPSED_TIME` uses `duration`, and `ANY` and `ALL` use `operands`.
   */
  "condition": IssueWatchCondition;

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
    condition: {
      baseName: "condition",
      type: "IssueWatchCondition",
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
    return IssueSnoozeRequestDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
