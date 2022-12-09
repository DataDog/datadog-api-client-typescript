/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsAssertionOperator } from "./SyntheticsAssertionOperator";
import { SyntheticsAssertionType } from "./SyntheticsAssertionType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * An assertion which uses a simple target.
 */
export class SyntheticsAssertionTarget {
  /**
   * Assertion operator to apply.
   */
  "operator": SyntheticsAssertionOperator;
  /**
   * The associated assertion property.
   */
  "property"?: string;
  /**
   * Value used by the operator.
   */
  "target": any;
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
      type: "SyntheticsAssertionOperator",
      required: true,
    },
    property: {
      baseName: "property",
      type: "string",
    },
    target: {
      baseName: "target",
      type: "any",
      required: true,
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
    return SyntheticsAssertionTarget.attributeTypeMap;
  }

  public constructor() {}
}
