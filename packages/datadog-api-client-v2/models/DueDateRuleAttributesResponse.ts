/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AutomationRuleCreatedBy } from "./AutomationRuleCreatedBy";
import { AutomationRuleModifiedBy } from "./AutomationRuleModifiedBy";
import { AutomationRuleScope } from "./AutomationRuleScope";
import { DueDateRuleAction } from "./DueDateRuleAction";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of a due date rule returned by the API.
 */
export class DueDateRuleAttributesResponse {
  /**
   * The action to take when the due date rule matches a finding.
   */
  "action": DueDateRuleAction;
  /**
   * The Unix timestamp in milliseconds when the rule was created.
   */
  "createdAt": number;
  /**
   * The user or Datadog system who created the rule.
   */
  "createdBy": AutomationRuleCreatedBy;
  /**
   * Whether the due date rule is enabled.
   */
  "enabled": boolean;
  /**
   * The Unix timestamp in milliseconds when the rule was last modified.
   */
  "modifiedAt": number;
  /**
   * The user or Datadog system who last modified the rule.
   */
  "modifiedBy": AutomationRuleModifiedBy;
  /**
   * The name of the due date rule.
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
      type: "DueDateRuleAction",
      required: true,
    },
    createdAt: {
      baseName: "created_at",
      type: "number",
      required: true,
      format: "int64",
    },
    createdBy: {
      baseName: "created_by",
      type: "AutomationRuleCreatedBy",
      required: true,
    },
    enabled: {
      baseName: "enabled",
      type: "boolean",
      required: true,
    },
    modifiedAt: {
      baseName: "modified_at",
      type: "number",
      required: true,
      format: "int64",
    },
    modifiedBy: {
      baseName: "modified_by",
      type: "AutomationRuleModifiedBy",
      required: true,
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
    return DueDateRuleAttributesResponse.attributeTypeMap;
  }

  public constructor() {}
}
