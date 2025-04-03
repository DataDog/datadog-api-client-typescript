import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SyntheticsAssertionJSONSchemaOperator } from "./SyntheticsAssertionJSONSchemaOperator";
import { SyntheticsAssertionJSONSchemaTargetTarget } from "./SyntheticsAssertionJSONSchemaTargetTarget";
import { SyntheticsAssertionType } from "./SyntheticsAssertionType";

/**
 * An assertion for the `validatesJSONSchema` operator.
 */
export class SyntheticsAssertionJSONSchemaTarget {
  /**
   * Assertion operator to apply.
   */
  "operator": SyntheticsAssertionJSONSchemaOperator;
  /**
   * Composed target for `validatesJSONSchema` operator.
   */
  "target"?: SyntheticsAssertionJSONSchemaTargetTarget;
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
      type: "SyntheticsAssertionJSONSchemaOperator",
      required: true,
    },
    target: {
      baseName: "target",
      type: "SyntheticsAssertionJSONSchemaTargetTarget",
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
    return SyntheticsAssertionJSONSchemaTarget.attributeTypeMap;
  }

  public constructor() {}
}
