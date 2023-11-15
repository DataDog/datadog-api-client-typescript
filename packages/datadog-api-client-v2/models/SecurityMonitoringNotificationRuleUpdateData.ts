/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityMonitoringNotificationRuleType } from "./SecurityMonitoringNotificationRuleType";
import { SecurityMonitoringNotificationRuleUpdateAttributes } from "./SecurityMonitoringNotificationRuleUpdateAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data containing the patch for a notification rule.
 */
export class SecurityMonitoringNotificationRuleUpdateData {
  /**
   * Attributes of a notification rule to be updated.
   */
  "attributes": SecurityMonitoringNotificationRuleUpdateAttributes;
  /**
   * The unique ID of the notification rule.
   */
  "id"?: string;
  /**
   * The type of the resource. The value should always be `notification_profiles`.
   */
  "type": SecurityMonitoringNotificationRuleType;

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
      type: "SecurityMonitoringNotificationRuleUpdateAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "SecurityMonitoringNotificationRuleType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SecurityMonitoringNotificationRuleUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
