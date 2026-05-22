/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A rule in a batch request.
 */
export class IncidentRuleExecutionStateRule {
  /**
   * Timestamp of the last rule execution.
   */
  "lastExecutedAt"?: Date;
  /**
   * The rule identifier.
   */
  "ruleUuid": string;

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
    lastExecutedAt: {
      baseName: "last_executed_at",
      type: "Date",
      format: "date-time",
    },
    ruleUuid: {
      baseName: "rule_uuid",
      type: "string",
      required: true,
      format: "uuid",
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
    return IncidentRuleExecutionStateRule.attributeTypeMap;
  }

  public constructor() {}
}
