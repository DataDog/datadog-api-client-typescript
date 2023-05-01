/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SensitiveDataScannerStandardPatternAttributes } from "./SensitiveDataScannerStandardPatternAttributes";
import { SensitiveDataScannerStandardPatternType } from "./SensitiveDataScannerStandardPatternType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Standard pattern item.
 */
export class SensitiveDataScannerStandardPatternsResponseItem {
  /**
   * Attributes of the Sensitive Data Scanner standard pattern.
   */
  "attributes"?: SensitiveDataScannerStandardPatternAttributes;
  /**
   * ID of the standard pattern.
   */
  "id"?: string;
  /**
   * Sensitive Data Scanner standard pattern type.
   */
  "type"?: SensitiveDataScannerStandardPatternType;

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
      type: "SensitiveDataScannerStandardPatternAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "SensitiveDataScannerStandardPatternType",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SensitiveDataScannerStandardPatternsResponseItem.attributeTypeMap;
  }

  public constructor() {}
}
