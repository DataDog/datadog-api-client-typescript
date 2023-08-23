/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SLOCorrection } from "./SLOCorrection";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The response object of an SLO correction.
 */
export class SLOCorrectionResponse {
  /**
   * The response object of a list of SLO corrections.
   */
  "data"?: SLOCorrection;

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
      type: "SLOCorrection",
    },
  };
}
