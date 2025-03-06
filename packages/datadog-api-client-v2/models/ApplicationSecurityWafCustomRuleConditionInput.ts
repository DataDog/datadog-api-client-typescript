/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ApplicationSecurityWafCustomRuleConditionInputAddress } from "./ApplicationSecurityWafCustomRuleConditionInputAddress";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Input from the request on which the condition should apply.
 */
export class ApplicationSecurityWafCustomRuleConditionInput {
  /**
   * Input from the request on which the condition should apply.
   */
  "address": ApplicationSecurityWafCustomRuleConditionInputAddress;
  /**
   * Specific path for the input.
   */
  "keyPath"?: Array<string>;

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
    address: {
      baseName: "address",
      type: "ApplicationSecurityWafCustomRuleConditionInputAddress",
      required: true,
    },
    keyPath: {
      baseName: "key_path",
      type: "Array<string>",
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
    return ApplicationSecurityWafCustomRuleConditionInput.attributeTypeMap;
  }

  public constructor() {}
}
