/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CompletionConditionOperator } from "./CompletionConditionOperator";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The definition of `CompletionCondition` object.
 */
export class CompletionCondition {
  /**
   * The `CompletionCondition` `operand1`.
   */
  "operand1": any;
  /**
   * The `CompletionCondition` `operand2`.
   */
  "operand2"?: any;
  /**
   * The definition of `CompletionConditionOperator` object.
   */
  "operator": CompletionConditionOperator;

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
    operand1: {
      baseName: "operand1",
      type: "any",
      required: true,
    },
    operand2: {
      baseName: "operand2",
      type: "any",
    },
    operator: {
      baseName: "operator",
      type: "CompletionConditionOperator",
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
    return CompletionCondition.attributeTypeMap;
  }

  public constructor() {}
}
