/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SeverityModifierRuleShiftActionType } from "./SeverityModifierRuleShiftActionType";
import { SeverityModifierSeverityDelta } from "./SeverityModifierSeverityDelta";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Shifts matched findings up or down by one severity rank. Shifting down stops at the lowest severity available for the finding type, for example `low` for `iac_misconfiguration`, `runtime_code_vulnerability`, `secret`, and `static_code_vulnerability` findings. A rule that wouldn't change a finding's severity doesn't match it, so Datadog checks the next rule.
 */
export class SeverityModifierRuleShiftAction {
  /**
   * An optional free-form explanation for the severity change.
   */
  "description"?: string;
  /**
   * The direction in which to shift the severity of matched findings by one rank. Shifting down stops at the lowest severity available for the finding type.
   */
  "severityDelta": SeverityModifierSeverityDelta;
  /**
   * The type of a severity modifier rule action that shifts the severity by one rank.
   */
  "type": SeverityModifierRuleShiftActionType;

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
    severityDelta: {
      baseName: "severity_delta",
      type: "SeverityModifierSeverityDelta",
      required: true,
    },
    type: {
      baseName: "type",
      type: "SeverityModifierRuleShiftActionType",
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
    return SeverityModifierRuleShiftAction.attributeTypeMap;
  }

  public constructor() {}
}
