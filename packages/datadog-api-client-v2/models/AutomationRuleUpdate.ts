/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AutomationRuleCreateAttributes } from "./AutomationRuleCreateAttributes";
import { CaseAutomationRuleResourceType } from "./CaseAutomationRuleResourceType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data object for updating an automation rule.
 */
export class AutomationRuleUpdate {
  /**
   * Attributes required to create an automation rule.
   */
  "attributes"?: AutomationRuleCreateAttributes;
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
      type: "AutomationRuleCreateAttributes",
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
    return AutomationRuleUpdate.attributeTypeMap;
  }

  public constructor() {}
}
