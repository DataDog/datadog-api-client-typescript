import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CaseNotificationRule } from "./CaseNotificationRule";

/**
 * Notification rule response
 */
export class CaseNotificationRuleResponse {
  /**
   * A notification rule for case management
   */
  "data"?: CaseNotificationRule;
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
      type: "CaseNotificationRule",
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
    return CaseNotificationRuleResponse.attributeTypeMap;
  }

  public constructor() {}
}
