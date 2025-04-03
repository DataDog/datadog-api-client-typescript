import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SLOCorrectionUpdateData } from "./SLOCorrectionUpdateData";

/**
 * An object that defines a correction to be applied to an SLO.
 */
export class SLOCorrectionUpdateRequest {
  /**
   * The data object associated with the SLO correction to be updated.
   */
  "data"?: SLOCorrectionUpdateData;
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
      type: "SLOCorrectionUpdateData",
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
    return SLOCorrectionUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
