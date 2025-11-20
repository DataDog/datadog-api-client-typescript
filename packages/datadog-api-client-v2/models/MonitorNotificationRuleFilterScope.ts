/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Filter monitor notifications. A monitor notification must match the scope.
 */
export class MonitorNotificationRuleFilterScope {
  /**
   * A scope composed of one or several key:value pairs, which can be used to filter monitor notifications on monitor and group tags.
   */
  "scope": string;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    scope: {
      baseName: "scope",
      type: "string",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return MonitorNotificationRuleFilterScope.attributeTypeMap;
  }

  public constructor() {}
}
