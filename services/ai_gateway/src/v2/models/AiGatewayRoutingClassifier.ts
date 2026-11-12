import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Saved classified-tier settings. Provider and model are empty when the caller cannot view the provider.
 */
export class AiGatewayRoutingClassifier {
  /**
   * Minimum decision confidence.
   */
  "confidenceThreshold": number;
  /**
   * Traffic context for the classifier.
   */
  "context"?: string;
  /**
   * Viewable decision model, or an empty string.
   */
  "model": string;
  /**
   * Viewable decision-model provider slug, or an empty string.
   */
  "provider": string;
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
      required: true,
      format: "double",
    },
    context: {
      baseName: "context",
      type: "string",
    },
    model: {
      baseName: "model",
      type: "string",
      required: true,
    },
    provider: {
      baseName: "provider",
      type: "string",
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
    return AiGatewayRoutingClassifier.attributeTypeMap;
  }

  public constructor() {}
}
