import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityAutomationRulesPageInfo } from "./SecurityAutomationRulesPageInfo";

/**
 * Metadata for the list of automation rules.
 */
export class SecurityAutomationRulesMeta {
  /**
   * Pagination information for the list of automation rules.
   */
  "page": SecurityAutomationRulesPageInfo;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    page: {
      baseName: "page",
      type: "SecurityAutomationRulesPageInfo",
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
    return SecurityAutomationRulesMeta.attributeTypeMap;
  }

  public constructor() {}
}
