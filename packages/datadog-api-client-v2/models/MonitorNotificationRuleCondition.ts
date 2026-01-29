/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A conditional recipient rule composed of a `scope` (the matching condition) and
 * `recipients` (who to notify when it matches).
 */
export class MonitorNotificationRuleCondition {
  /**
   * A list of recipients to notify. Uses the same format as the monitor `message` field. Must not start with an '@'. Cannot be used with `conditional_recipients`.
   */
  "recipients": Array<string>;
  /**
   * Defines the condition under which the recipients are notified. Supported formats:
   * - Monitor status condition using `transition_type:<status>`, for example `transition_type:is_alert`.
   * - A single tag key:value pair, for example `env:prod`.
   */
  "scope": string;

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
    recipients: {
      baseName: "recipients",
      type: "Array<string>",
      required: true,
    },
    scope: {
      baseName: "scope",
      type: "string",
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
    return MonitorNotificationRuleCondition.attributeTypeMap;
  }

  public constructor() {}
}
