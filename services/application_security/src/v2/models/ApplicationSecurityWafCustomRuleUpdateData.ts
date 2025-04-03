import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ApplicationSecurityWafCustomRuleType } from "./ApplicationSecurityWafCustomRuleType";
import { ApplicationSecurityWafCustomRuleUpdateAttributes } from "./ApplicationSecurityWafCustomRuleUpdateAttributes";

/**
 * Object for a single WAF Custom Rule.
 */
export class ApplicationSecurityWafCustomRuleUpdateData {
  /**
   * Update a WAF custom rule.
   */
  "attributes": ApplicationSecurityWafCustomRuleUpdateAttributes;
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
      type: "ApplicationSecurityWafCustomRuleUpdateAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ApplicationSecurityWafCustomRuleType",
      required: true,
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
    return ApplicationSecurityWafCustomRuleUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
