/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SensitiveDataScannerMetaVersionOnly } from "./SensitiveDataScannerMetaVersionOnly";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Delete rule request.
 */
export class SensitiveDataScannerRuleDeleteRequest {
  /**
   * Meta payload containing information about the API.
   */
  "meta": SensitiveDataScannerMetaVersionOnly;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    meta: {
      baseName: "meta",
      type: "SensitiveDataScannerMetaVersionOnly",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SensitiveDataScannerRuleDeleteRequest.attributeTypeMap;
  }

  public constructor() {}
}
