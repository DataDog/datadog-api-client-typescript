/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { SLOCorrectionCreateRequestAttributes } from "./SLOCorrectionCreateRequestAttributes";
import { SLOCorrectionType } from "./SLOCorrectionType";

export class SLOCorrectionCreateData {
  "attributes"?: SLOCorrectionCreateRequestAttributes;
  "type": SLOCorrectionType;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: {
      baseName: string;
      type: string;
      required?: boolean;
      format?: string;
    };
  } = {
    attributes: {
      baseName: "attributes",
      type: "SLOCorrectionCreateRequestAttributes",
    },
    type: {
      baseName: "type",
      type: "SLOCorrectionType",
      required: true,
    },
  };

  static getAttributeTypeMap() {
    return SLOCorrectionCreateData.attributeTypeMap;
  }

  public constructor() {}
}
