/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ApplicationSecurityWafCustomRuleType } from "./ApplicationSecurityWafCustomRuleType";
import { ApplicationSecurityWafCustomRuleUpdateAttributes } from "./ApplicationSecurityWafCustomRuleUpdateAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Object for a single WAF Custom Rule.
 */
export class ApplicationSecurityWafCustomRuleUpdateData {
  /**
   * Update a WAF custom rule.
   */
  "attributes": ApplicationSecurityWafCustomRuleUpdateAttributes;
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
      type: "ApplicationSecurityWafCustomRuleUpdateAttributes",
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
    return ApplicationSecurityWafCustomRuleUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
