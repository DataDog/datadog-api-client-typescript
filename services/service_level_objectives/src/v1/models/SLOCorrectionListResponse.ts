import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ResponseMetaAttributes } from "./ResponseMetaAttributes";
import { SLOCorrection } from "./SLOCorrection";

/**
 * A list of  SLO correction objects.
 */
export class SLOCorrectionListResponse {
  /**
   * The list of SLO corrections objects.
   */
  "data"?: Array<SLOCorrection>;
  /**
   * Object describing meta attributes of response.
   */
  "meta"?: ResponseMetaAttributes;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };
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
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
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
