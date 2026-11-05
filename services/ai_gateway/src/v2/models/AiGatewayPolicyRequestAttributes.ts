import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiGatewayPolicyTierRequest } from "./AiGatewayPolicyTierRequest";

/**
 * Attributes used to create or replace a routing policy document.
 */
export class AiGatewayPolicyRequestAttributes {
  /**
   * Inbound request pattern.
   */
  "inbound": string;
  /**
   * Routing priority.
   */
  "priority"?: number;
  "tiers": Array<AiGatewayPolicyTierRequest>;
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
    inbound: {
      baseName: "inbound",
      type: "string",
      required: true,
    },
    priority: {
      baseName: "priority",
      type: "number",
      format: "int64",
    },
    tiers: {
      baseName: "tiers",
      type: "Array<AiGatewayPolicyTierRequest>",
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
    return AiGatewayPolicyRequestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
