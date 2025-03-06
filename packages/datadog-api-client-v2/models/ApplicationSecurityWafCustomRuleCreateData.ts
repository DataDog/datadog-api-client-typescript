/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ApplicationSecurityWafCustomRuleCreateAttributes } from "./ApplicationSecurityWafCustomRuleCreateAttributes";
import { ApplicationSecurityWafCustomRuleType } from "./ApplicationSecurityWafCustomRuleType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Object for a single WAF custom rule.
 */
export class ApplicationSecurityWafCustomRuleCreateData {
  /**
   * Create a new WAF custom rule.
   */
  "attributes": ApplicationSecurityWafCustomRuleCreateAttributes;
  /**
   * The type of the resource. The value should always be `custom_rule`.
   */
  "type": ApplicationSecurityWafCustomRuleType;

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
      type: "ApplicationSecurityWafCustomRuleCreateAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ApplicationSecurityWafCustomRuleType",
      required: true,
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
    return ApplicationSecurityWafCustomRuleCreateData.attributeTypeMap;
  }

  public constructor() {}
}
