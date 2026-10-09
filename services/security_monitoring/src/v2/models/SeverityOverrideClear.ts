import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SeverityOverrideClearActionType } from "./SeverityOverrideClearActionType";

/**
 * Removes the manual severity override of the findings.
 * This action does not remove a severity set by an automation rule.
 */
export class SeverityOverrideClear {
  /**
   * The action that removes a manual severity override.
   */
  "action": SeverityOverrideClearActionType;
  /**
   * Additional information about the severity change. This field has a limit of 280 characters.
   */
  "description"?: string;
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
    action: {
      baseName: "action",
      type: "SeverityOverrideClearActionType",
      required: true,
    },
    description: {
      baseName: "description",
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
    return SeverityOverrideClear.attributeTypeMap;
  }

  public constructor() {}
}
