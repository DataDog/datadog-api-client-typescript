import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DueDateRuleDataResponse } from "./DueDateRuleDataResponse";
import { SecurityAutomationRulesLinks } from "./SecurityAutomationRulesLinks";
import { SecurityAutomationRulesMeta } from "./SecurityAutomationRulesMeta";

/**
 * A list of due date rules with pagination metadata.
 */
export class DueDateRulesResponse {
  /**
   * A list of due date rule data objects.
   */
  "data": Array<DueDateRuleDataResponse>;
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
  "additionalProperties"?: { [key: string]: any; };
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
      type: "Array<DueDateRuleDataResponse>",
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
    return DueDateRulesResponse.attributeTypeMap;
  }

  public constructor() {}
}
