import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CaseNotificationRuleCreate } from "./CaseNotificationRuleCreate";

/**
 * Notification rule create request
 */
export class CaseNotificationRuleCreateRequest {
  /**
   * Notification rule create
   */
  "data": CaseNotificationRuleCreate;
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
      type: "CaseNotificationRuleCreate",
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
    return CaseNotificationRuleCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
