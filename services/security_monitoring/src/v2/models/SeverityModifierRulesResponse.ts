import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityAutomationRulesLinks } from "./SecurityAutomationRulesLinks";
import { SecurityAutomationRulesMeta } from "./SecurityAutomationRulesMeta";
import { SeverityModifierRuleDataResponse } from "./SeverityModifierRuleDataResponse";

/**
 * A list of severity modifier rules with pagination metadata.
 */
export class SeverityModifierRulesResponse {
  /**
   * A list of severity modifier rule data objects.
   */
  "data": Array<SeverityModifierRuleDataResponse>;
  /**
   * Pagination links for the list of automation rules.
   */
  "links": SecurityAutomationRulesLinks;
  /**
   * Metadata for the list of automation rules.
   */
  "meta": SecurityAutomationRulesMeta;
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
    data: {
      baseName: "data",
      type: "Array<SeverityModifierRuleDataResponse>",
      required: true,
    },
    links: {
      baseName: "links",
      type: "SecurityAutomationRulesLinks",
      required: true,
    },
    meta: {
      baseName: "meta",
      type: "SecurityAutomationRulesMeta",
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
    return SeverityModifierRulesResponse.attributeTypeMap;
  }

  public constructor() {}
}
