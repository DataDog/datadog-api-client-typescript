import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ApplicationSecurityWafCustomRuleData } from "./ApplicationSecurityWafCustomRuleData";

/**
 * Response object that includes a list of WAF custom rules.
 */
export class ApplicationSecurityWafCustomRuleListResponse {
  /**
   * The WAF custom rule data.
   */
  "data"?: Array<ApplicationSecurityWafCustomRuleData>;
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
      type: "Array<ApplicationSecurityWafCustomRuleData>",
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
    return ApplicationSecurityWafCustomRuleListResponse.attributeTypeMap;
  }

  public constructor() {}
}
