import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ApplicationSecurityWafCustomRuleTagsCategory } from "./ApplicationSecurityWafCustomRuleTagsCategory";

/**
 * Tags associated with the WAF Custom Rule. The concatenation of category and type will form the security
 * activity field associated with the traces.
 */
export class ApplicationSecurityWafCustomRuleTags {
  /**
   * The category of the WAF Rule, can be either `business_logic`, `attack_attempt` or `security_response`.
   */
  "category": ApplicationSecurityWafCustomRuleTagsCategory;
  /**
   * The type of the WAF rule, associated with the category will form the security activity.
   */
  "type": string;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: { [key: string]: string; } };
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    category: {
      baseName: "category",
      type: "ApplicationSecurityWafCustomRuleTagsCategory",
      required: true,
    },
    type: {
      baseName: "type",
      type: "string",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: string; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ApplicationSecurityWafCustomRuleTags.attributeTypeMap;
  }

  public constructor() {}
}
