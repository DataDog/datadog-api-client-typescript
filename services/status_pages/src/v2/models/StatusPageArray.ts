import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { StatusPageArrayIncluded } from "./StatusPageArrayIncluded";
import { StatusPageData } from "./StatusPageData";
import { StatusPagesResponseMeta } from "./StatusPagesResponseMeta";

export class StatusPageArray {
  "data": Array<StatusPageData>;
  "included"?: Array<StatusPageArrayIncluded>;
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
      type: "Array<StatusPageData>",
      required: true,
    },
    included: {
      baseName: "included",
      type: "Array<StatusPageArrayIncluded>",
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
    return StatusPageArray.attributeTypeMap;
  }

  public constructor() {}
}
