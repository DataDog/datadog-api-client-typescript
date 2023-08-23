/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SLOCorrectionResponseAttributes } from "./SLOCorrectionResponseAttributes";
import { SLOCorrectionType } from "./SLOCorrectionType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The response object of a list of SLO corrections.
 */
export class SLOCorrection {
  /**
   * The attribute object associated with the SLO correction.
   */
  "attributes"?: SLOCorrectionResponseAttributes;
  /**
   * The ID of the SLO correction.
   */
  "id"?: string;
  /**
   * SLO correction resource type.
   */
  "type"?: SLOCorrectionType;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    attributes: {
      type: "SLOCorrectionResponseAttributes",
    },
    id: {
      type: "string",
    },
    type: {
      type: "SLOCorrectionType",
    },
  };
}
