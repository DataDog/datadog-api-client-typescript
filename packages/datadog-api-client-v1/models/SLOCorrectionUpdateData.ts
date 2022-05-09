/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SLOCorrectionType } from "./SLOCorrectionType";
import { SLOCorrectionUpdateRequestAttributes } from "./SLOCorrectionUpdateRequestAttributes";

import { AttributeTypeMap } from "../util";

/**
 * The data object associated with the SLO correction to be updated.
 */
export class SLOCorrectionUpdateData {
  /**
   * The attribute object associated with the SLO correction to be updated.
   */
  "attributes"?: SLOCorrectionUpdateRequestAttributes;
  /**
   * SLO correction resource type.
   */
  "type"?: SLOCorrectionType;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    attributes: {
      baseName: "attributes",
      type: "SLOCorrectionUpdateRequestAttributes",
    },
    type: {
      baseName: "type",
      type: "SLOCorrectionType",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SLOCorrectionUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
