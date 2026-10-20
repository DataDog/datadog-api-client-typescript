import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TemporaryGrantRequestData } from "./TemporaryGrantRequestData";
import { TemporaryGrantRequestListMeta } from "./TemporaryGrantRequestListMeta";

/**
 * A page of temporary grant requests, ordered by UUID rather than creation time.
 */
export class TemporaryGrantRequestListResponse {
  /**
   * Requests visible to the authenticated caller.
   */
  "data": Array<TemporaryGrantRequestData>;
  /**
   * Pagination metadata.
   */
  "meta": TemporaryGrantRequestListMeta;
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
      type: "Array<TemporaryGrantRequestData>",
      required: true,
    },
    meta: {
      baseName: "meta",
      type: "TemporaryGrantRequestListMeta",
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
    return TemporaryGrantRequestListResponse.attributeTypeMap;
  }

  public constructor() {}
}
