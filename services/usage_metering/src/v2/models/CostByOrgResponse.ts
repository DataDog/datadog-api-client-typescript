import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CostByOrg } from "./CostByOrg";

/**
 * Chargeback Summary response.
 */
export class CostByOrgResponse {
  /**
   * Response containing Chargeback Summary.
   */
  "data"?: Array<CostByOrg>;
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
      type: "Array<CostByOrg>",
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
    return CostByOrgResponse.attributeTypeMap;
  }

  public constructor() {}
}
