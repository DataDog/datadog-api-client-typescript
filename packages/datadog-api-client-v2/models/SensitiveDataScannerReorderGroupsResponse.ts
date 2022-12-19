/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SensitiveDataScannerMeta } from "./SensitiveDataScannerMeta";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Group reorder response.
 */
export class SensitiveDataScannerReorderGroupsResponse {
  /**
   * Meta response containing information about the API.
   */
  "meta"?: SensitiveDataScannerMeta;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    meta: {
      baseName: "meta",
      type: "SensitiveDataScannerMeta",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SensitiveDataScannerReorderGroupsResponse.attributeTypeMap;
  }

  public constructor() {}
}
