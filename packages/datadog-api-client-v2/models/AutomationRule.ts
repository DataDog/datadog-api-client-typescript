/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AutomationRuleAttributes } from "./AutomationRuleAttributes";
import { AutomationRuleRelationships } from "./AutomationRuleRelationships";
import { CaseAutomationRuleResourceType } from "./CaseAutomationRuleResourceType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * An automation rule that executes an action (such as running a Datadog workflow or assigning an AI agent) when a specified case event occurs within a project.
 */
export class AutomationRule {
  /**
   * Core attributes of an automation rule, including its name, trigger condition, action to execute, and current state.
   */
  "attributes": AutomationRuleAttributes;
  /**
   * Automation rule identifier.
   */
  "id": string;
  /**
   * Related resources for the automation rule, including the users who created and last modified it.
   */
  "relationships"?: AutomationRuleRelationships;
  /**
   * JSON:API resource type for case automation rules.
   */
  "type": CaseAutomationRuleResourceType;

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
    attributes: {
      baseName: "attributes",
      type: "AutomationRuleAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    relationships: {
      baseName: "relationships",
      type: "AutomationRuleRelationships",
    },
    type: {
      baseName: "type",
      type: "CaseAutomationRuleResourceType",
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
    return AutomationRule.attributeTypeMap;
  }

  public constructor() {}
}
