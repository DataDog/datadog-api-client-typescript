/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SensitiveDataScannerStandardPattern } from "./SensitiveDataScannerStandardPattern";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A standard pattern.
 */
export class SensitiveDataScannerStandardPatternData {
  /**
   * Data containing the standard pattern id.
   */
  "data"?: SensitiveDataScannerStandardPattern;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    data: {
      baseName: "data",
      type: "SensitiveDataScannerStandardPattern",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SensitiveDataScannerStandardPatternData.attributeTypeMap;
  }

  public constructor() {}
}
