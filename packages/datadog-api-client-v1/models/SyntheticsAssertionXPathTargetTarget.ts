/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Composed target for `validatesXPath` operator.
 */
export class SyntheticsAssertionXPathTargetTarget {
  /**
   * The specific operator to use on the path.
   */
  "operator"?: string;
  /**
   * The path target value to compare to.
   */
  "targetValue"?: any;
  /**
   * The X path to assert.
   */
  "xPath"?: string;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    operator: {
      baseName: "operator",
      type: "string",
    },
    targetValue: {
      baseName: "targetValue",
      type: "any",
    },
    xPath: {
      baseName: "xPath",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SyntheticsAssertionXPathTargetTarget.attributeTypeMap;
  }

  public constructor() {}
}
