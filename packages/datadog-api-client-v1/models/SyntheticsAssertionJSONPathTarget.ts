/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsAssertionJSONPathOperator } from "./SyntheticsAssertionJSONPathOperator";
import { SyntheticsAssertionJSONPathTargetTarget } from "./SyntheticsAssertionJSONPathTargetTarget";
import { SyntheticsAssertionType } from "./SyntheticsAssertionType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * An assertion for the `validatesJSONPath` operator.
 */
export class SyntheticsAssertionJSONPathTarget {
  /**
   * Assertion operator to apply.
   */
  "operator": SyntheticsAssertionJSONPathOperator;
  /**
   * The associated assertion property.
   */
  "property"?: string;
  /**
   * Composed target for `validatesJSONPath` operator.
   */
  "target"?: SyntheticsAssertionJSONPathTargetTarget;
  /**
   * Type of the assertion.
   */
  "type": SyntheticsAssertionType;

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
    operator: {
      baseName: "operator",
      type: "SyntheticsAssertionJSONPathOperator",
      required: true,
    },
    property: {
      baseName: "property",
      type: "string",
    },
    target: {
      baseName: "target",
      type: "SyntheticsAssertionJSONPathTargetTarget",
    },
    type: {
      baseName: "type",
      type: "SyntheticsAssertionType",
      required: true,
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
    return SyntheticsAssertionJSONPathTarget.attributeTypeMap;
  }

  public constructor() {}
}
