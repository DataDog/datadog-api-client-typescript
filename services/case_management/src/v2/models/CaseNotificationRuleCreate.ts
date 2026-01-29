import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CaseNotificationRuleCreateAttributes } from "./CaseNotificationRuleCreateAttributes";
import { CaseNotificationRuleResourceType } from "./CaseNotificationRuleResourceType";

/**
 * Notification rule create
 */
export class CaseNotificationRuleCreate {
  /**
   * Notification rule creation attributes
   */
  "attributes": CaseNotificationRuleCreateAttributes;
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
      type: "CaseNotificationRuleCreateAttributes",
      required: true,
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
    return CaseNotificationRuleCreate.attributeTypeMap;
  }

  public constructor() {}
}
