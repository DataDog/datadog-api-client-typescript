/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AutomationRuleScope } from "./AutomationRuleScope";
import { SeverityModifierRuleAction } from "./SeverityModifierRuleAction";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes for creating or updating a severity modifier rule.
 */
export class SeverityModifierRuleAttributesCreate {
  /**
   * The action to take when a severity modifier rule matches a finding. This is a discriminated union on `type`: `set` assigns a fixed severity, while `shift` moves the severity up or down by one rank.
   *
   * A severity modifier rule's `rule.query` must not filter on `@severity` or on the `@severity_details.user_adjusted.*` namespace; use `@severity_details.adjusted.value` to filter on the Datadog-adjusted severity instead.
   */
  "action": SeverityModifierRuleAction;
  /**
   * Whether the severity modifier rule is enabled.
   */
  "enabled"?: boolean;
  /**
   * The name of the severity modifier rule.
   */
  "name": string;
  /**
   * Defines the scope of findings to which the automation rule applies.
   */
  "rule": AutomationRuleScope;

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
    action: {
      baseName: "action",
      type: "SeverityModifierRuleAction",
      required: true,
    },
    enabled: {
      baseName: "enabled",
      type: "boolean",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    rule: {
      baseName: "rule",
      type: "AutomationRuleScope",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SeverityModifierRuleAttributesCreate.attributeTypeMap;
  }

  public constructor() {}
}
