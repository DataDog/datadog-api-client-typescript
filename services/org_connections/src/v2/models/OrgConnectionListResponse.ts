import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OrgConnection } from "./OrgConnection";
import { OrgConnectionListResponseMeta } from "./OrgConnectionListResponseMeta";

/**
 * Response containing a list of org connections.
 */
export class OrgConnectionListResponse {
  /**
   * List of org connections.
   */
  "data": Array<OrgConnection>;
  /**
   * Pagination metadata.
   */
  "meta"?: OrgConnectionListResponseMeta;
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
      type: "Array<OrgConnection>",
      required: true,
    },
    meta: {
      baseName: "meta",
      type: "OrgConnectionListResponseMeta",
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
    return OrgConnectionListResponse.attributeTypeMap;
  }

  public constructor() {}
}
