import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiGatewayKnownProvider } from "./AiGatewayKnownProvider";
import { AiGatewayProviderIntegrationConfig } from "./AiGatewayProviderIntegrationConfig";

/**
 * AI Gateway provider configuration and metadata.
 */
export class AiGatewayProviderAttributes {
  /**
   * Multiplier applied to provider costs.
   */
  "costMultiplier": number;
  /**
   * Time when the resource was created.
   */
  "createdAt": Date;
  /**
   * Provider integration account identifier.
   */
  "integrationAccountId": string;
  /**
   * Provider-specific integration configuration.
   */
  "integrationConfig"?: AiGatewayProviderIntegrationConfig;
  /**
   * Known provider implementation.
   */
  "knownProvider": AiGatewayKnownProvider;
  /**
   * Human-readable resource name.
   */
  "name": string;
  /**
   * Immutable routing identifier.
   */
  "slug": string;
  /**
   * Time when the resource was last updated.
   */
  "updatedAt": Date;
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
    costMultiplier: {
      baseName: "cost_multiplier",
      type: "number",
      required: true,
      format: "double",
    },
    createdAt: {
      baseName: "created_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    integrationAccountId: {
      baseName: "integration_account_id",
      type: "string",
      required: true,
    },
    integrationConfig: {
      baseName: "integration_config",
      type: "AiGatewayProviderIntegrationConfig",
    },
    knownProvider: {
      baseName: "known_provider",
      type: "AiGatewayKnownProvider",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    slug: {
      baseName: "slug",
      type: "string",
      required: true,
    },
    updatedAt: {
      baseName: "updated_at",
      type: "Date",
      required: true,
      format: "date-time",
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
    return AiGatewayProviderAttributes.attributeTypeMap;
  }

  public constructor() {}
}
