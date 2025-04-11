import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SLOCorrectionResponseAttributes } from "./SLOCorrectionResponseAttributes";
import { SLOCorrectionType } from "./SLOCorrectionType";

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
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SLOCorrection.attributeTypeMap;
  }

  public constructor() {}
}
