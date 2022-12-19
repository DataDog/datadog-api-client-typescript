/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SensitiveDataScannerStandardPatternsResponseItem } from "./SensitiveDataScannerStandardPatternsResponseItem";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * List Standard patterns response data.
 */
export class SensitiveDataScannerStandardPatternsResponseData {
  /**
   * List Standard patterns response.
   */
  "data"?: Array<SensitiveDataScannerStandardPatternsResponseItem>;

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
      type: "Array<SensitiveDataScannerStandardPatternsResponseItem>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SensitiveDataScannerStandardPatternsResponseData.attributeTypeMap;
  }

  public constructor() {}
}
