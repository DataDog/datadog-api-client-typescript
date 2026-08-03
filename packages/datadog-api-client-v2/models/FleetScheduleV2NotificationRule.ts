/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Notification configuration attached to a schedule.
 *
 * Included when available. If the notification rule cannot be retrieved, this field is
 * omitted and the schedule is still returned. If the notification rule is retrieved but its
 * handles cannot be resolved, it is still included with an empty `handles` array.
 */
export class FleetScheduleV2NotificationRule {
  /**
   * Notification handles (for example, Slack channels or PagerDuty integrations).
   */
  "handles"?: Array<string>;
  /**
   * Tags associated with the notification rule.
   */
  "tags"?: Array<string>;

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
    handles: {
      baseName: "handles",
      type: "Array<string>",
    },
    tags: {
      baseName: "tags",
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
    return FleetScheduleV2NotificationRule.attributeTypeMap;
  }

  public constructor() {}
}
