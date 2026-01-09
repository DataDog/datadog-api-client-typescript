import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DegradationArrayIncluded } from "./DegradationArrayIncluded";
import { DegradationData } from "./DegradationData";

export class Degradation {
  "data"?: DegradationData;
  "included"?: Array<DegradationArrayIncluded>;
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
      type: "DegradationData",
    },
    included: {
      baseName: "included",
      type: "Array<DegradationArrayIncluded>",
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
    return Degradation.attributeTypeMap;
  }

  public constructor() {}
}
