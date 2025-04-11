import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ResponseMetaAttributes } from "./ResponseMetaAttributes";
import { SecurityMonitoringRuleResponse } from "./SecurityMonitoringRuleResponse";

/**
 * List of rules.
 */
export class SecurityMonitoringListRulesResponse {
  /**
   * Array containing the list of rules.
   */
  "data"?: Array<SecurityMonitoringRuleResponse>;
  /**
   * Object describing meta attributes of response.
   */
  "meta"?: ResponseMetaAttributes;
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
      type: "Array<SecurityMonitoringRuleResponse>",
    },
    meta: {
      baseName: "meta",
      type: "ResponseMetaAttributes",
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
    return SecurityMonitoringListRulesResponse.attributeTypeMap;
  }

  public constructor() {}
}
