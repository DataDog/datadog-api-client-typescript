import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Decision model that picks the destination of a classified tier.
 */
export class AiGatewayRoutingRuleClassifierRequest {
  /**
   * Probability from 0 to 1 that the picked destination must reach. Below it, the request goes to the default destination. Omitted or null defaults to 0.5.
   */
  "confidenceThreshold"?: number;
  /**
   * Optional prompt that tells the decision model about the rule's traffic, in up to 2000 characters.
   */
  "context"?: string;
  /**
   * Canonical name of the decision model on that provider. The model must be enabled on the provider and support its decision API. Required when the rule has no saved decision model. On replacement, omit both provider and model to keep the rule's saved decision model.
   */
  "model"?: string;
  /**
   * Slug of the provider that serves the decision model. Its known_provider must be `openai`, `baseten`, or `typesafe`, and "*" is not allowed. A new selection requires provider View. Required when the rule has no saved decision model. On replacement, omit both provider and model to keep the rule's saved decision model.
   */
  "provider"?: string;
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
    confidenceThreshold: {
      baseName: "confidence_threshold",
      type: "number",
      format: "double",
    },
    context: {
      baseName: "context",
      type: "string",
    },
    model: {
      baseName: "model",
      type: "string",
    },
    provider: {
      baseName: "provider",
      type: "string",
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
    return AiGatewayRoutingRuleClassifierRequest.attributeTypeMap;
  }

  public constructor() {}
}
