import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Auto-transition assigned cases settings
 */
export class AutoTransitionAssignedCases {
  /**
   * Whether to auto-transition cases when self-assigned
   */
  "autoTransitionAssignedCasesOnSelfAssigned"?: boolean;
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
    autoTransitionAssignedCasesOnSelfAssigned: {
      baseName: "auto_transition_assigned_cases_on_self_assigned",
      type: "boolean",
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
    return AutoTransitionAssignedCases.attributeTypeMap;
  }

  public constructor() {}
}
