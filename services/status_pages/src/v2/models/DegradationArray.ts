import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DegradationArrayIncluded } from "./DegradationArrayIncluded";
import { DegradationData } from "./DegradationData";
import { StatusPagesResponseMeta } from "./StatusPagesResponseMeta";

export class DegradationArray {
  "data": Array<DegradationData>;
  "included"?: Array<DegradationArrayIncluded>;
  "meta"?: StatusPagesResponseMeta;
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
      type: "Array<DegradationData>",
      required: true,
    },
    included: {
      baseName: "included",
      type: "Array<DegradationArrayIncluded>",
    },
    meta: {
      baseName: "meta",
      type: "StatusPagesResponseMeta",
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
    return DegradationArray.attributeTypeMap;
  }

  public constructor() {}
}
