/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SeverityModifierRuleSetActionType } from "./SeverityModifierRuleSetActionType";
import { SeverityModifierSeverity } from "./SeverityModifierSeverity";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Sets matched findings to a fixed severity.
 */
export class SeverityModifierRuleSetAction {
  /**
   * An optional free-form explanation for the severity change.
   */
  "description"?: string;
  /**
   * The severity to assign to matched findings. `info_none` is not supported for the `iac_misconfiguration`, `runtime_code_vulnerability`, `secret`, or `static_code_vulnerability` finding types.
   */
  "severity": SeverityModifierSeverity;
  /**
   * The type of a severity modifier rule action that sets a fixed severity.
   */
  "type": SeverityModifierRuleSetActionType;

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
    description: {
      baseName: "description",
      type: "string",
    },
    severity: {
      baseName: "severity",
      type: "SeverityModifierSeverity",
      required: true,
    },
    type: {
      baseName: "type",
      type: "SeverityModifierRuleSetActionType",
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
    return SeverityModifierRuleSetAction.attributeTypeMap;
  }

  public constructor() {}
}
