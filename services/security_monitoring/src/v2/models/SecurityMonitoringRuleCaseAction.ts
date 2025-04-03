import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringRuleCaseActionOptions } from "./SecurityMonitoringRuleCaseActionOptions";
import { SecurityMonitoringRuleCaseActionType } from "./SecurityMonitoringRuleCaseActionType";

/**
 * Action to perform when a signal is triggered. Only available for Application Security rule type.
 */
export class SecurityMonitoringRuleCaseAction {
  /**
   * Options for the rule action
   */
  "options"?: SecurityMonitoringRuleCaseActionOptions;
  /**
   * The action type.
   */
  "type"?: SecurityMonitoringRuleCaseActionType;
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
    options: {
      baseName: "options",
      type: "SecurityMonitoringRuleCaseActionOptions",
    },
    type: {
      baseName: "type",
      type: "SecurityMonitoringRuleCaseActionType",
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
    return SecurityMonitoringRuleCaseAction.attributeTypeMap;
  }

  public constructor() {}
}
