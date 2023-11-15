/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityMonitoringRuleSeverity } from "./SecurityMonitoringRuleSeverity";
import { SecurityMonitoringRuleTypes } from "./SecurityMonitoringRuleTypes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Selectors describing the notification rule.
 */
export class SecurityMonitoringNotificationRuleSelectors {
  /**
   * Set of rule and signal tags for which a notification will be triggered.
   */
  "attributes": Array<string>;
  /**
   * Whether vulnerability_management rules are matched by default when the selector for rule type is empty.
   */
  "implicitVmRuleMatch": boolean;
  /**
   * Set of rule tags for which a notification will be triggered.
   */
  "ruleTags": Array<string>;
  /**
   * Set of signal types (rule types) for which a notification will be triggered.
   */
  "ruleTypes": Array<SecurityMonitoringRuleTypes>;
  /**
   * Set of signal severities (rule case statuses) for which a notification will be triggered.
   */
  "severities": Array<SecurityMonitoringRuleSeverity>;
  /**
   * Set of signal tags for which a notification will be triggered.
   */
  "signalTags": Array<string>;

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
      type: "Array<string>",
      required: true,
    },
    implicitVmRuleMatch: {
      baseName: "implicit_vm_rule_match",
      type: "boolean",
      required: true,
    },
    ruleTags: {
      baseName: "rule_tags",
      type: "Array<string>",
      required: true,
    },
    ruleTypes: {
      baseName: "rule_types",
      type: "Array<SecurityMonitoringRuleTypes>",
      required: true,
    },
    severities: {
      baseName: "severities",
      type: "Array<SecurityMonitoringRuleSeverity>",
      required: true,
    },
    signalTags: {
      baseName: "signal_tags",
      type: "Array<string>",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SecurityMonitoringNotificationRuleSelectors.attributeTypeMap;
  }

  public constructor() {}
}
