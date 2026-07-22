import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CsmUnifiedHostData } from "./CsmUnifiedHostData";
import { CsmUnifiedHostsMeta } from "./CsmUnifiedHostsMeta";

/**
 * The response returned when listing unified hosts.
 */
export class CsmUnifiedHostsResponse {
  /**
   * The list of unified hosts for the current page.
   */
  "data": Array<CsmUnifiedHostData>;
  /**
   * Pagination metadata for a unified hosts list response.
   */
  "meta": CsmUnifiedHostsMeta;
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
      type: "Array<CsmUnifiedHostData>",
      required: true,
    },
    meta: {
      baseName: "meta",
      type: "CsmUnifiedHostsMeta",
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
    return CsmUnifiedHostsResponse.attributeTypeMap;
  }

  public constructor() {}
}
