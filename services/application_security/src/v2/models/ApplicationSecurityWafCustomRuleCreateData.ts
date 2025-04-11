import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ApplicationSecurityWafCustomRuleCreateAttributes } from "./ApplicationSecurityWafCustomRuleCreateAttributes";
import { ApplicationSecurityWafCustomRuleType } from "./ApplicationSecurityWafCustomRuleType";

/**
 * Object for a single WAF custom rule.
 */
export class ApplicationSecurityWafCustomRuleCreateData {
  /**
   * Create a new WAF custom rule.
   */
  "attributes": ApplicationSecurityWafCustomRuleCreateAttributes;
  /**
   * The type of the resource. The value should always be `custom_rule`.
   */
  "type": ApplicationSecurityWafCustomRuleType;
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
      type: "ApplicationSecurityWafCustomRuleCreateAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ApplicationSecurityWafCustomRuleType",
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
    return ApplicationSecurityWafCustomRuleCreateData.attributeTypeMap;
  }

  public constructor() {}
}
