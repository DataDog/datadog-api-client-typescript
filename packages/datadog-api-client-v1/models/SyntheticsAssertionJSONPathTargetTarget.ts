/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsAssertionTargetValue } from "./SyntheticsAssertionTargetValue";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Composed target for `validatesJSONPath` operator.
 */
export class SyntheticsAssertionJSONPathTargetTarget {
  /**
   * The element from the list of results to assert on.  To choose from the first element in the list `firstElementMatches`, every element in the list `everyElementMatches`, at least one element in the list `atLeastOneElementMatches` or the serialized value of the list `serializationMatches`.
   */
  "elementsOperator"?: string;
  /**
   * The JSON path to assert.
   */
  "jsonPath"?: string;
  /**
   * The specific operator to use on the path.
   */
  "operator"?: string;
  /**
   * Value used by the operator in assertions. Can be either a number or string.
   */
  "targetValue"?: SyntheticsAssertionTargetValue;

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
    elementsOperator: {
      baseName: "elementsOperator",
      type: "string",
    },
    jsonPath: {
      baseName: "jsonPath",
      type: "string",
    },
    operator: {
      baseName: "operator",
      type: "string",
    },
    targetValue: {
      baseName: "targetValue",
      type: "SyntheticsAssertionTargetValue",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SyntheticsAssertionJSONPathTargetTarget.attributeTypeMap;
  }

  public constructor() {}
}
