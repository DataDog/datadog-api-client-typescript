import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { Case } from "./Case";
import { CasesResponseMeta } from "./CasesResponseMeta";

/**
 * Response with work items
 */
export class CasesResponse {
  /**
   * Work items response data
   */
  "data"?: Array<Case>;
  /**
   * Work items response metadata
   */
  "meta"?: CasesResponseMeta;
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
      type: "Array<Case>",
    },
    meta: {
      baseName: "meta",
      type: "CasesResponseMeta",
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
    return CasesResponse.attributeTypeMap;
  }

  public constructor() {}
}
