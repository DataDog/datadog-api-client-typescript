/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ResponseMetaAttributes } from "./ResponseMetaAttributes";
import { SLOCorrection } from "./SLOCorrection";
import { AttributeTypeMap } from "../util";

/**
 * A list of  SLO correction objects.
 */

export class SLOCorrectionListResponse {
  /**
   * The list of of SLO corrections objects.
   */
  "data"?: Array<SLOCorrection>;
  "meta"?: ResponseMetaAttributes;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    data: {
      baseName: "data",
      type: "Array<SLOCorrection>",
    },
    meta: {
      baseName: "meta",
      type: "ResponseMetaAttributes",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SLOCorrectionListResponse.attributeTypeMap;
  }

  public constructor() {}
}
