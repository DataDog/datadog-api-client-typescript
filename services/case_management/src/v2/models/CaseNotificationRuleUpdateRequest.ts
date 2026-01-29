import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CaseNotificationRuleUpdate } from "./CaseNotificationRuleUpdate";

/**
 * Notification rule update request
 */
export class CaseNotificationRuleUpdateRequest {
  /**
   * Notification rule update
   */
  "data": CaseNotificationRuleUpdate;
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
      type: "CaseNotificationRuleUpdate",
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
    return CaseNotificationRuleUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
