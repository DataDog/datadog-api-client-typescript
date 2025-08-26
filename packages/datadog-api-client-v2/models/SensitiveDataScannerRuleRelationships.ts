/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SensitiveDataScannerGroupData } from "./SensitiveDataScannerGroupData";
import { SensitiveDataScannerStandardPatternData } from "./SensitiveDataScannerStandardPatternData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Relationships of a scanning rule.
 */
export class SensitiveDataScannerRuleRelationships {
  /**
   * A scanning group data.
   */
  "group"?: SensitiveDataScannerGroupData;
  /**
   * A standard pattern.
   */
  "standardPattern"?: SensitiveDataScannerStandardPatternData;

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
    group: {
      baseName: "group",
      type: "SensitiveDataScannerGroupData",
    },
    standardPattern: {
      baseName: "standard_pattern",
      type: "SensitiveDataScannerStandardPatternData",
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
    return SensitiveDataScannerRuleRelationships.attributeTypeMap;
  }

  public constructor() {}
}
