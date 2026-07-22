import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DegradationUpdateData } from "./DegradationUpdateData";
import { DegradationUpdateIncluded } from "./DegradationUpdateIncluded";

/**
 * Response object for a degradation update.
 */
export class DegradationUpdate {
  /**
   * The data object for a degradation update.
   */
  "data"?: DegradationUpdateData;
  /**
   * Resources related to the degradation update.
   */
  "included"?: Array<DegradationUpdateIncluded>;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };
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
      type: "DegradationUpdateData",
    },
    included: {
      baseName: "included",
      type: "Array<DegradationUpdateIncluded>",
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
    return DegradationUpdate.attributeTypeMap;
  }

  public constructor() {}
}
