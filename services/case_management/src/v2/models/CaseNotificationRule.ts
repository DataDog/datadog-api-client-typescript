import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CaseNotificationRuleAttributes } from "./CaseNotificationRuleAttributes";
import { CaseNotificationRuleResourceType } from "./CaseNotificationRuleResourceType";

/**
 * A notification rule for case management
 */
export class CaseNotificationRule {
  /**
   * Notification rule attributes
   */
  "attributes": CaseNotificationRuleAttributes;
  /**
   * The notification rule's identifier
   */
  "id": string;
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
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
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
    return CaseNotificationRule.attributeTypeMap;
  }

  public constructor() {}
}
