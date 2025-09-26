/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MonitorNotificationRuleCondition } from "./MonitorNotificationRuleCondition";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Use conditional recipients to define different recipients for different situations.
 */
export class MonitorNotificationRuleConditionalRecipients {
  /**
   * Conditions of the notification rule.
   */
  "conditions": Array<MonitorNotificationRuleCondition>;
  /**
   * A list of recipients to notify. Uses the same format as the monitor `message` field. Must not start with an '@'.
   */
  "fallbackRecipients"?: Array<string>;

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
    conditions: {
      baseName: "conditions",
      type: "Array<MonitorNotificationRuleCondition>",
      required: true,
    },
    fallbackRecipients: {
      baseName: "fallback_recipients",
      type: "Array<string>",
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
    return MonitorNotificationRuleConditionalRecipients.attributeTypeMap;
  }

  public constructor() {}
}
