import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SLOCorrectionCreateRequestAttributes } from "./SLOCorrectionCreateRequestAttributes";
import { SLOCorrectionType } from "./SLOCorrectionType";

/**
 * The data object associated with the SLO correction to be created.
 */
export class SLOCorrectionCreateData {
  /**
   * The attribute object associated with the SLO correction to be created.
   */
  "attributes"?: SLOCorrectionCreateRequestAttributes;
  /**
   * SLO correction resource type.
   */
  "type": SLOCorrectionType;
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
      type: "SLOCorrectionCreateRequestAttributes",
    },
    type: {
      baseName: "type",
      type: "SLOCorrectionType",
      required: true,
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
    return SLOCorrectionCreateData.attributeTypeMap;
  }

  public constructor() {}
}
