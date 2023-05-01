/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SensitiveDataScannerRuleType } from "./SensitiveDataScannerRuleType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Rule item included in the group.
 */
export class SensitiveDataScannerRule {
  /**
   * ID of the rule.
   */
  "id"?: string;
  /**
   * Sensitive Data Scanner rule type.
   */
  "type"?: SensitiveDataScannerRuleType;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "SensitiveDataScannerRuleType",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SensitiveDataScannerRule.attributeTypeMap;
  }

  public constructor() {}
}
