/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { SLOCorrectionResponseAttributes } from "./SLOCorrectionResponseAttributes";
import { SLOCorrectionType } from "./SLOCorrectionType";
import { AttributeTypeMap } from "./ObjectSerializer";

/**
 * The response object of a list of SLO corrections.
 */

export class SLOCorrection {
  "attributes"?: SLOCorrectionResponseAttributes;
  /**
   * The ID of the SLO correction.
   */
  "id"?: string;
  "type"?: SLOCorrectionType;

  "unparsedObject"?: any;

  static readonly attributeTypeMap: AttributeTypeMap = {
    attributes: {
      baseName: "attributes",
      type: "SLOCorrectionResponseAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "SLOCorrectionType",
    },
  };

  static getAttributeTypeMap(): AttributeTypeMap {
    return SLOCorrection.attributeTypeMap;
  }

  public constructor() {}
}
