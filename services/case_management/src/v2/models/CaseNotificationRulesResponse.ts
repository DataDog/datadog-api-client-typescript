import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CaseNotificationRule } from "./CaseNotificationRule";

/**
 * Response with notification rules
 */
export class CaseNotificationRulesResponse {
  /**
   * Notification rules data
   */
  "data"?: Array<CaseNotificationRule>;
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
      type: "Array<CaseNotificationRule>",
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
    return CaseNotificationRulesResponse.attributeTypeMap;
  }

  public constructor() {}
}
