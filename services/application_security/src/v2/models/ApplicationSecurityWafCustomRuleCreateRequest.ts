import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ApplicationSecurityWafCustomRuleCreateData } from "./ApplicationSecurityWafCustomRuleCreateData";

/**
 * Request object that includes the custom rule to create.
 */
export class ApplicationSecurityWafCustomRuleCreateRequest {
  /**
   * Object for a single WAF custom rule.
   */
  "data": ApplicationSecurityWafCustomRuleCreateData;
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
      type: "ApplicationSecurityWafCustomRuleCreateData",
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
    return ApplicationSecurityWafCustomRuleCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
