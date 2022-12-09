/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ResponseMetaAttributes } from "./ResponseMetaAttributes";
import { SLOCorrection } from "./SLOCorrection";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A list of  SLO correction objects.
 */
export class SLOCorrectionListResponse {
  /**
   * The list of of SLO corrections objects.
   */
  "data"?: Array<SLOCorrection>;
  /**
   * Object describing meta attributes of response.
   */
  "meta"?: ResponseMetaAttributes;

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
