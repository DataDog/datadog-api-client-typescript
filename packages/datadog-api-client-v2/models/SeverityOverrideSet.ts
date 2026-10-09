/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SeverityOverrideSetActionType } from "./SeverityOverrideSetActionType";
import { SeverityOverrideValue } from "./SeverityOverrideValue";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Applies a manual severity override to the findings.
 */
export class SeverityOverrideSet {
  /**
   * The action that applies a manual severity override.
   */
  "action": SeverityOverrideSetActionType;
  /**
   * Additional information about the severity change. This field has a limit of 280 characters.
   */
  "description"?: string;
  /**
   * Severity to apply to the findings.
   * `info` sets the lowest severity the finding type allows.
   */
  "value": SeverityOverrideValue;

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
      type: "SeverityOverrideSetActionType",
      required: true,
    },
    description: {
      baseName: "description",
      type: "string",
    },
    value: {
      baseName: "value",
      type: "SeverityOverrideValue",
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
    return SeverityOverrideSet.attributeTypeMap;
  }

  public constructor() {}
}
