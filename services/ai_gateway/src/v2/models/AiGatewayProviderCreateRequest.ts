import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiGatewayProviderCreateData } from "./AiGatewayProviderCreateData";

/**
 * Request to create an AI Gateway provider.
 */
export class AiGatewayProviderCreateRequest {
  /**
   * Data used to create an AI Gateway provider.
   */
  "data": AiGatewayProviderCreateData;
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
      type: "AiGatewayProviderCreateData",
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
    return AiGatewayProviderCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
