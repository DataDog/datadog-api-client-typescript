/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityMonitoringNotificationRuleResponseAttributes } from "./SecurityMonitoringNotificationRuleResponseAttributes";
import { SecurityMonitoringNotificationRuleType } from "./SecurityMonitoringNotificationRuleType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data containing notification rule attributes.
 */
export class SecurityMonitoringNotificationRuleResponseData {
  /**
   * Attributes of the notification rule.
   */
  "attributes"?: SecurityMonitoringNotificationRuleResponseAttributes;
  /**
   * The unique ID of the notification rule.
   */
  "id"?: string;
  /**
   * The type of the resource. The value should always be `notification_rules`.
   */
  "type"?: SecurityMonitoringNotificationRuleType;

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
      type: "SecurityMonitoringNotificationRuleResponseAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "SecurityMonitoringNotificationRuleType",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SecurityMonitoringNotificationRuleResponseData.attributeTypeMap;
  }

  public constructor() {}
}
