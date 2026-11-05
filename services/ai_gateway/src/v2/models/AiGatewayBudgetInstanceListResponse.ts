import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiGatewayBudgetInstanceResource } from "./AiGatewayBudgetInstanceResource";
import { AiGatewayRestrictedDetailsMeta } from "./AiGatewayRestrictedDetailsMeta";

/**
 * Response containing budget instance counters.
 */
export class AiGatewayBudgetInstanceListResponse {
  "data": Array<AiGatewayBudgetInstanceResource>;
  /**
   * Visibility information for identifying instance details.
   */
  "meta": AiGatewayRestrictedDetailsMeta;
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
      type: "Array<AiGatewayBudgetInstanceResource>",
      required: true,
    },
    meta: {
      baseName: "meta",
      type: "AiGatewayRestrictedDetailsMeta",
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
    return AiGatewayBudgetInstanceListResponse.attributeTypeMap;
  }

  public constructor() {}
}
