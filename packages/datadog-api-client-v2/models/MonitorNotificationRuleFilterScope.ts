/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Filters monitor notifications using a scope expression over key:value pairs with boolean logic (AND, OR, NOT).
 */
export class MonitorNotificationRuleFilterScope {
  /**
   * A scope expression composed by key:value pairs (e.g. `service:foo`) with boolean operators (AND, OR, NOT) and parentheses for grouping.
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
