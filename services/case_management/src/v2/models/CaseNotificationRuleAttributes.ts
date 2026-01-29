import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CaseNotificationRuleRecipient } from "./CaseNotificationRuleRecipient";
import { CaseNotificationRuleTrigger } from "./CaseNotificationRuleTrigger";

/**
 * Notification rule attributes
 */
export class CaseNotificationRuleAttributes {
  /**
   * Whether the notification rule is enabled
   */
  "isEnabled"?: boolean;
  /**
   * Query to filter cases for this notification rule
   */
  "query"?: string;
  /**
   * List of notification recipients
   */
  "recipients"?: Array<CaseNotificationRuleRecipient>;
  /**
   * List of triggers for this notification rule
   */
  "triggers"?: Array<CaseNotificationRuleTrigger>;
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
    isEnabled: {
      baseName: "is_enabled",
      type: "boolean",
    },
    query: {
      baseName: "query",
      type: "string",
    },
    recipients: {
      baseName: "recipients",
      type: "Array<CaseNotificationRuleRecipient>",
    },
    triggers: {
      baseName: "triggers",
      type: "Array<CaseNotificationRuleTrigger>",
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
    return CaseNotificationRuleAttributes.attributeTypeMap;
  }

  public constructor() {}
}
