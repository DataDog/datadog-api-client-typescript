import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CostAttributionType } from "./CostAttributionType";
import { MonthlyCostAttributionAttributes } from "./MonthlyCostAttributionAttributes";

/**
 * Cost data.
 */
export class MonthlyCostAttributionBody {
  /**
   * Cost Attribution by Tag for a given organization.
   */
  "attributes"?: MonthlyCostAttributionAttributes;
  /**
   * Unique ID of the response.
   */
  "id"?: string;
  /**
   * Type of cost attribution data.
   */
  "type"?: CostAttributionType;
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
    attributes: {
      baseName: "attributes",
      type: "MonthlyCostAttributionAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "CostAttributionType",
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
    return MonthlyCostAttributionBody.attributeTypeMap;
  }

  public constructor() {}
}
