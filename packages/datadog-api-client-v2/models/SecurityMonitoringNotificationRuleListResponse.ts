/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityMonitoringNotificationRuleResponseData } from "./SecurityMonitoringNotificationRuleResponseData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * List of notification rules.
 */
export class SecurityMonitoringNotificationRuleListResponse {
  /**
   * Array containing the list of notification rules.
   */
  "data"?: Array<SecurityMonitoringNotificationRuleResponseData>;

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
      type: "Array<SecurityMonitoringNotificationRuleResponseData>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SecurityMonitoringNotificationRuleListResponse.attributeTypeMap;
  }

  public constructor() {}
}
