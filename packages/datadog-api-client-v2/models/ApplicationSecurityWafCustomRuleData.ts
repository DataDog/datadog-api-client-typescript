/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ApplicationSecurityWafCustomRuleAttributes } from "./ApplicationSecurityWafCustomRuleAttributes";
import { ApplicationSecurityWafCustomRuleType } from "./ApplicationSecurityWafCustomRuleType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Object for a single WAF custom rule.
 */
export class ApplicationSecurityWafCustomRuleData {
  /**
   * A WAF custom rule.
   */
  "attributes"?: ApplicationSecurityWafCustomRuleAttributes;
  /**
   * The ID of the custom rule.
   */
  "id"?: string;
  /**
   * The type of the resource. The value should always be `custom_rule`.
   */
  "type"?: ApplicationSecurityWafCustomRuleType;

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
      type: "ApplicationSecurityWafCustomRuleAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "ApplicationSecurityWafCustomRuleType",
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
    return ApplicationSecurityWafCustomRuleData.attributeTypeMap;
  }

  public constructor() {}
}
