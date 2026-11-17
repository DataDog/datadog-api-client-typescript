import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The pricing source entry the price was read from.
 */
export class AiGatewayModelAutomaticPricingSource {
  /**
   * How the gateway matched the model to the source entry, such as `wire_id`.
   */
  "matchMethod": string;
  /**
   * Model identifier in the source.
   */
  "modelId": string;
  /**
   * Pricing source name.
   */
  "name": string;
  /**
   * Provider identifier in the source.
   */
  "providerId": string;
  /**
   * Source revision the price was read from.
   */
  "revision": string;
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
    matchMethod: {
      baseName: "match_method",
      type: "string",
      required: true,
    },
    modelId: {
      baseName: "model_id",
      type: "string",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    providerId: {
      baseName: "provider_id",
      type: "string",
      required: true,
    },
    revision: {
      baseName: "revision",
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
    return AiGatewayModelAutomaticPricingSource.attributeTypeMap;
  }

  public constructor() {}
}
