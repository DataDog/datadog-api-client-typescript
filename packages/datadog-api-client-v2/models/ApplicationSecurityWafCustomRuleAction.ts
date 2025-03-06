/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ApplicationSecurityWafCustomRuleActionAction } from "./ApplicationSecurityWafCustomRuleActionAction";
import { ApplicationSecurityWafCustomRuleActionParameters } from "./ApplicationSecurityWafCustomRuleActionParameters";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The definition of `ApplicationSecurityWafCustomRuleAction` object.
 */
export class ApplicationSecurityWafCustomRuleAction {
  /**
   * Override the default action to take when the WAF custom rule would block.
   */
  "action"?: ApplicationSecurityWafCustomRuleActionAction;
  /**
   * The definition of `ApplicationSecurityWafCustomRuleActionParameters` object.
   */
  "parameters"?: ApplicationSecurityWafCustomRuleActionParameters;

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
      type: "ApplicationSecurityWafCustomRuleActionAction",
    },
    parameters: {
      baseName: "parameters",
      type: "ApplicationSecurityWafCustomRuleActionParameters",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ApplicationSecurityWafCustomRuleAction.attributeTypeMap;
  }

  public constructor() {}
}
