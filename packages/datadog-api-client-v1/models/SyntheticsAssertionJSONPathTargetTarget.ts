/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../util";

/**
 * Composed target for `validatesJSONPath` operator.
 */
export class SyntheticsAssertionJSONPathTargetTarget {
  /**
   * The JSON path to assert.
   */
  "jsonPath"?: string;
  /**
   * The specific operator to use on the path.
   */
  "operator"?: string;
  /**
   * The path target value to compare to.
   */
  "targetValue"?: any;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
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
