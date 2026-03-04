import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { PaginationMeta } from "./PaginationMeta";
import { StatusPageArrayIncluded } from "./StatusPageArrayIncluded";
import { StatusPageData } from "./StatusPageData";

export class StatusPageArray {
  "data": Array<StatusPageData>;
  /**
   * The included related resources of a status page. Client must explicitly request these resources by name in the `include` query parameter.
   */
  "included"?: Array<StatusPageArrayIncluded>;
  /**
   * Response metadata.
   */
  "meta"?: PaginationMeta;
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
      type: "PaginationMeta",
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
