/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsAssertionType } from "./SyntheticsAssertionType";
import { SyntheticsAssertionXPathOperator } from "./SyntheticsAssertionXPathOperator";
import { SyntheticsAssertionXPathTargetTarget } from "./SyntheticsAssertionXPathTargetTarget";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * An assertion for the `validatesXPath` operator.
 */
export class SyntheticsAssertionXPathTarget {
  /**
   * Assertion operator to apply.
   */
  "operator": SyntheticsAssertionXPathOperator;
  /**
   * The associated assertion property.
   */
  "property"?: string;
  /**
   * Composed target for `validatesXPath` operator.
   */
  "target"?: SyntheticsAssertionXPathTargetTarget;
  /**
   * Type of the assertion.
   */
  "type": SyntheticsAssertionType;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    operator: {
      baseName: "operator",
      type: "SyntheticsAssertionXPathOperator",
      required: true,
    },
    property: {
      baseName: "property",
      type: "string",
    },
    target: {
      baseName: "target",
      type: "SyntheticsAssertionXPathTargetTarget",
    },
    type: {
      baseName: "type",
      type: "SyntheticsAssertionType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SyntheticsAssertionXPathTarget.attributeTypeMap;
  }

  public constructor() {}
}
