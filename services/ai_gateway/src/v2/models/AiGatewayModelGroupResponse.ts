import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiGatewayModelGroupResource } from "./AiGatewayModelGroupResource";

/**
 * Response containing one AI Gateway model group.
 */
export class AiGatewayModelGroupResponse {
  /**
   * AI Gateway model group resource.
   */
  "data": AiGatewayModelGroupResource;
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
      type: "AiGatewayModelGroupResource",
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
    return AiGatewayModelGroupResponse.attributeTypeMap;
  }

  public constructor() {}
}
