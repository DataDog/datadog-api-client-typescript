import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CaseNotificationRuleAttributes } from "./CaseNotificationRuleAttributes";
import { CaseNotificationRuleResourceType } from "./CaseNotificationRuleResourceType";

/**
 * Notification rule update
 */
export class CaseNotificationRuleUpdate {
  /**
   * Notification rule attributes
   */
  "attributes"?: CaseNotificationRuleAttributes;
  /**
   * Notification rule resource type
   */
  "type": CaseNotificationRuleResourceType;
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
      type: "CaseNotificationRuleAttributes",
    },
    type: {
      baseName: "type",
      type: "CaseNotificationRuleResourceType",
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
    return CaseNotificationRuleUpdate.attributeTypeMap;
  }

  public constructor() {}
}
