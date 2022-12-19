/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SensitiveDataScannerGroup } from "./SensitiveDataScannerGroup";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A scanning group data.
 */
export class SensitiveDataScannerGroupData {
  /**
   * A scanning group.
   */
  "data"?: SensitiveDataScannerGroup;

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
      type: "SensitiveDataScannerGroup",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SensitiveDataScannerGroupData.attributeTypeMap;
  }

  public constructor() {}
}
