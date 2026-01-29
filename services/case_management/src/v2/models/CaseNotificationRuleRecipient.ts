import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CaseNotificationRuleRecipientData } from "./CaseNotificationRuleRecipientData";

/**
 * Notification rule recipient
 */
export class CaseNotificationRuleRecipient {
  /**
   * Recipient data
   */
  "data"?: CaseNotificationRuleRecipientData;
  /**
   * Type of recipient (SLACK_CHANNEL, EMAIL, HTTP, PAGERDUTY_SERVICE, MS_TEAMS_CHANNEL)
   */
  "type"?: string;
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
      type: "CaseNotificationRuleRecipientData",
    },
    type: {
      baseName: "type",
      type: "string",
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
    return CaseNotificationRuleRecipient.attributeTypeMap;
  }

  public constructor() {}
}
