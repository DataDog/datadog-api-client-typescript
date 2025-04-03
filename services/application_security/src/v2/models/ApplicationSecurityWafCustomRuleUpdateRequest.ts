import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ApplicationSecurityWafCustomRuleUpdateData } from "./ApplicationSecurityWafCustomRuleUpdateData";

/**
 * Request object that includes the Custom Rule to update.
 */
export class ApplicationSecurityWafCustomRuleUpdateRequest {
  /**
   * Object for a single WAF Custom Rule.
   */
  "data": ApplicationSecurityWafCustomRuleUpdateData;
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
      type: "ApplicationSecurityWafCustomRuleUpdateData",
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
    return ApplicationSecurityWafCustomRuleUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
