/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityMonitoringNotificationRuleCreateAttributes } from "./SecurityMonitoringNotificationRuleCreateAttributes";
import { SecurityMonitoringNotificationRuleType } from "./SecurityMonitoringNotificationRuleType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data containing new notification rule attributes.
 */
export class SecurityMonitoringNotificationRuleCreateData {
  /**
   * Attributes of a notification rule to be created.
   */
  "attributes": SecurityMonitoringNotificationRuleCreateAttributes;
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
      type: "SecurityMonitoringNotificationRuleCreateAttributes",
      required: true,
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
    return SecurityMonitoringNotificationRuleCreateData.attributeTypeMap;
  }

  public constructor() {}
}
