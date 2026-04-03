/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ConditionRequest } from "./ConditionRequest";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Targeting rule request payload.
 */
export class TargetingRuleRequest {
  /**
   * Conditions that must match for this rule.
   */
  "conditions": Array<ConditionRequest>;

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
    conditions: {
      baseName: "conditions",
      type: "Array<ConditionRequest>",
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
    return TargetingRuleRequest.attributeTypeMap;
  }

  public constructor() {}
}
