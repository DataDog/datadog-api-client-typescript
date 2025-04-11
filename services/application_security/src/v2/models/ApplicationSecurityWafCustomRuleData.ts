import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ApplicationSecurityWafCustomRuleAttributes } from "./ApplicationSecurityWafCustomRuleAttributes";
import { ApplicationSecurityWafCustomRuleType } from "./ApplicationSecurityWafCustomRuleType";

/**
 * Object for a single WAF custom rule.
 */
export class ApplicationSecurityWafCustomRuleData {
  /**
   * A WAF custom rule.
   */
  "attributes"?: ApplicationSecurityWafCustomRuleAttributes;
  /**
   * The ID of the custom rule.
   */
  "id"?: string;
  /**
   * The type of the resource. The value should always be `custom_rule`.
   */
  "type"?: ApplicationSecurityWafCustomRuleType;
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
      type: "ApplicationSecurityWafCustomRuleAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "ApplicationSecurityWafCustomRuleType",
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
    return ApplicationSecurityWafCustomRuleData.attributeTypeMap;
  }

  public constructor() {}
}
