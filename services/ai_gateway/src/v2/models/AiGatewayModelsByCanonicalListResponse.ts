import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiGatewayModelsByCanonicalResource } from "./AiGatewayModelsByCanonicalResource";

/**
 * Response containing model catalog entries grouped by canonical ID.
 */
export class AiGatewayModelsByCanonicalListResponse {
  "data": Array<AiGatewayModelsByCanonicalResource>;
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
      type: "Array<AiGatewayModelsByCanonicalResource>",
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
    return AiGatewayModelsByCanonicalListResponse.attributeTypeMap;
  }

  public constructor() {}
}
