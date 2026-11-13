/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SensitiveDataScannerRuleData } from "./SensitiveDataScannerRuleData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Relationships of a scanning group of a target.
 */
export class SensitiveDataScannerTargetGroupRelationships {
  /**
   * Rules included in the group.
   */
  "rules": SensitiveDataScannerRuleData;

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
    rules: {
      baseName: "rules",
      type: "SensitiveDataScannerRuleData",
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
    return SensitiveDataScannerTargetGroupRelationships.attributeTypeMap;
  }

  public constructor() {}
}
