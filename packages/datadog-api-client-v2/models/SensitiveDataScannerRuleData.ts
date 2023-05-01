/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SensitiveDataScannerRule } from "./SensitiveDataScannerRule";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Rules included in the group.
 */
export class SensitiveDataScannerRuleData {
  /**
   * Rules included in the group. The order is important.
   */
  "data"?: Array<SensitiveDataScannerRule>;

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
      type: "Array<SensitiveDataScannerRule>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SensitiveDataScannerRuleData.attributeTypeMap;
  }

  public constructor() {}
}
