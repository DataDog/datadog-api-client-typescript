/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SensitiveDataScannerGroupItem } from "./SensitiveDataScannerGroupItem";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * List of groups, ordered.
 */
export class SensitiveDataScannerGroupList {
  /**
   * List of groups. The order is important.
   */
  "data"?: Array<SensitiveDataScannerGroupItem>;

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
      type: "Array<SensitiveDataScannerGroupItem>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SensitiveDataScannerGroupList.attributeTypeMap;
  }

  public constructor() {}
}
