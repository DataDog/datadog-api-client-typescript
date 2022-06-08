/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SLOCorrectionUpdateData } from "./SLOCorrectionUpdateData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * An object that defines a correction to be applied to an SLO.
 */
export class SLOCorrectionUpdateRequest {
  /**
   * The data object associated with the SLO correction to be updated.
   */
  "data"?: SLOCorrectionUpdateData;

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
      type: "SLOCorrectionUpdateData",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SLOCorrectionUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
