import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Compliance framework mapping for a rule.
 */
export class RuleBasedViewComplianceFramework {
  /**
   * Identifier of the control inside the requirement.
   */
  "control"?: string;
  /**
   * Handle of the compliance framework.
   */
  "framework"?: string;
  /**
   * Whether the framework is a Datadog default framework. `true` indicates a Datadog framework and `false` indicates a custom framework.
   */
  "isDefault"?: boolean;
  /**
   * Optional message describing the framework mapping for the rule.
   */
  "message"?: string;
  /**
   * Name of the requirement that contains the control.
   */
  "requirement"?: string;
  /**
   * Version of the compliance framework.
   */
  "version"?: string;
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
    control: {
      baseName: "control",
      type: "string",
    },
    framework: {
      baseName: "framework",
      type: "string",
    },
    isDefault: {
      baseName: "is_default",
      type: "boolean",
    },
    message: {
      baseName: "message",
      type: "string",
    },
    requirement: {
      baseName: "requirement",
      type: "string",
    },
    version: {
      baseName: "version",
      type: "string",
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
    return RuleBasedViewComplianceFramework.attributeTypeMap;
  }

  public constructor() {}
}
