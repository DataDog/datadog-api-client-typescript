import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DegradationData } from "./DegradationData";
import { DegradationIncluded } from "./DegradationIncluded";

export class Degradation {
  "data"?: DegradationData;
  /**
   * The included related resources of a degradation. Client must explicitly request these resources by name in the `include` query parameter.
   */
  "included"?: Array<DegradationIncluded>;
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
      type: "Array<DegradationIncluded>",
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
