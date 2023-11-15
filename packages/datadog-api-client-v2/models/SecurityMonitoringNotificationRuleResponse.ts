/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityMonitoringNotificationRuleResponseData } from "./SecurityMonitoringNotificationRuleResponseData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The response returned after all notification rules operations, containing the affected notification rule data.
 */
export class SecurityMonitoringNotificationRuleResponse {
  /**
   * Data containing notification rule attributes.
   */
  "data"?: SecurityMonitoringNotificationRuleResponseData;

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
      type: "SecurityMonitoringNotificationRuleResponseData",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SecurityMonitoringNotificationRuleResponse.attributeTypeMap;
  }

  public constructor() {}
}
