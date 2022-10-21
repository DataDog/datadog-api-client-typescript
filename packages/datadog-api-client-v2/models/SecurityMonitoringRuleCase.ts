/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityMonitoringRuleSeverity } from "./SecurityMonitoringRuleSeverity";

import { UnparsedObject } from "../../datadog-api-client-common/util";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Case when signal is generated.
 */
export class SecurityMonitoringRuleCase {
  /**
   * A rule case contains logical operations (`>`,`>=`, `&&`, `||`) to determine if a signal should be generated
   * based on the event counts in the previously defined queries.
   */
  "condition"?: string;
  /**
   * Name of the case.
   */
  "name"?: string;
  /**
   * Notification targets for each rule case.
   */
  "notifications"?: Array<string>;
  /**
   * Severity of the Security Signal.
   */
  "status"?: SecurityMonitoringRuleSeverity;

  /**
   * @ignore
   */
  "unparsedObject"?: UnparsedObject;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    condition: {
      baseName: "condition",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    notifications: {
      baseName: "notifications",
      type: "Array<string>",
    },
    status: {
      baseName: "status",
      type: "SecurityMonitoringRuleSeverity",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SecurityMonitoringRuleCase.attributeTypeMap;
  }

  public constructor() {}
}
