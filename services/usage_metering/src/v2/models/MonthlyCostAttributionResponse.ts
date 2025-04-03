import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MonthlyCostAttributionBody } from "./MonthlyCostAttributionBody";
import { MonthlyCostAttributionMeta } from "./MonthlyCostAttributionMeta";

/**
 * Response containing the monthly cost attribution by tag(s).
 */
export class MonthlyCostAttributionResponse {
  /**
   * Response containing cost attribution.
   */
  "data"?: Array<MonthlyCostAttributionBody>;
  /**
   * The object containing document metadata.
   */
  "meta"?: MonthlyCostAttributionMeta;
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
      type: "Array<MonthlyCostAttributionBody>",
    },
    meta: {
      baseName: "meta",
      type: "MonthlyCostAttributionMeta",
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
    return MonthlyCostAttributionResponse.attributeTypeMap;
  }

  public constructor() {}
}
