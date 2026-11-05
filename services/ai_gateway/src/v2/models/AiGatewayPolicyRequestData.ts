import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiGatewayPolicyRequestAttributes } from "./AiGatewayPolicyRequestAttributes";
import { AiGatewayPolicyType } from "./AiGatewayPolicyType";

/**
 * Data used to create or replace a routing policy document.
 */
export class AiGatewayPolicyRequestData {
  /**
   * Attributes used to create or replace a routing policy document.
   */
  "attributes": AiGatewayPolicyRequestAttributes;
  /**
   * AI Gateway routing policy resource type.
   */
  "type": AiGatewayPolicyType;
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
      type: "AiGatewayPolicyRequestAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "AiGatewayPolicyType",
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
    return AiGatewayPolicyRequestData.attributeTypeMap;
  }

  public constructor() {}
}
