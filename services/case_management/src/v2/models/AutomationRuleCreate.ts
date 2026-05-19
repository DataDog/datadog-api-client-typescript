import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AutomationRuleCreateAttributes } from "./AutomationRuleCreateAttributes";
import { CaseAutomationRuleResourceType } from "./CaseAutomationRuleResourceType";

/**
 * Data object for creating an automation rule.
 */
export class AutomationRuleCreate {
  /**
   * Attributes required to create an automation rule.
   */
  "attributes": AutomationRuleCreateAttributes;
  /**
   * JSON:API resource type for case automation rules.
   */
  "type": CaseAutomationRuleResourceType;
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
    attributes: {
      baseName: "attributes",
      type: "AutomationRuleCreateAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "CaseAutomationRuleResourceType",
      required: true,
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
    return AutomationRuleCreate.attributeTypeMap;
  }

  public constructor() {}
}
