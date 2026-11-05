import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiGatewayPolicyRequestData } from "./AiGatewayPolicyRequestData";

/**
 * Request to create or replace a routing policy document.
 */
export class AiGatewayPolicyRequest {
  /**
   * Data used to create or replace a routing policy document.
   */
  "data": AiGatewayPolicyRequestData;
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
      type: "AiGatewayPolicyRequestData",
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
    return AiGatewayPolicyRequest.attributeTypeMap;
  }

  public constructor() {}
}
