/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityMonitoringNotificationRuleCreateData } from "./SecurityMonitoringNotificationRuleCreateData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Request body for creating a security monitoring notification rule.
 */
export class SecurityMonitoringNotificationRuleCreateRequest {
  /**
   * Data containing new notification rule attributes.
   */
  "data": SecurityMonitoringNotificationRuleCreateData;

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
      type: "SecurityMonitoringNotificationRuleCreateData",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SecurityMonitoringNotificationRuleCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
