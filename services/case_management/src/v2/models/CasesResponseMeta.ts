import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CasesResponseMetaPagination } from "./CasesResponseMetaPagination";

/**
 * Cases response metadata
 */
export class CasesResponseMeta {
  /**
   * Pagination metadata
   */
  "page"?: CasesResponseMetaPagination;
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
    page: {
      baseName: "page",
      type: "CasesResponseMetaPagination",
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
    return CasesResponseMeta.attributeTypeMap;
  }

  public constructor() {}
}
