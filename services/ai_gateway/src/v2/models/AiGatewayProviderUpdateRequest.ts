import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiGatewayProviderUpdateData } from "./AiGatewayProviderUpdateData";

/**
 * Request to update an AI Gateway provider.
 */
export class AiGatewayProviderUpdateRequest {
  /**
   * Data used to update an AI Gateway provider.
   */
  "data": AiGatewayProviderUpdateData;
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
      type: "AiGatewayProviderUpdateData",
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
    return AiGatewayProviderUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
