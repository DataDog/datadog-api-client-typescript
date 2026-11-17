import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiGatewayKnownProvider } from "./AiGatewayKnownProvider";
import { AiGatewayProviderCredentialSource } from "./AiGatewayProviderCredentialSource";
import { AiGatewayProviderIntegrationConfig } from "./AiGatewayProviderIntegrationConfig";
import { AiGatewayProviderStatus } from "./AiGatewayProviderStatus";

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
   * Whose credential the gateway sends to the provider. `integration_account` sends the integration
   * account's credential. `subscription` forwards each caller's own subscription sign-in (`ChatGPT` for
   * `openai`, `claude.ai` for `anthropic`) and needs no integration account.
   */
  "credentialSource"?: AiGatewayProviderCredentialSource;
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
   * Read-only. Whether the provider is working, based on the model sync and live calls. Omitted for
   * providers that are never checked, which include providers without an integration account, and
   * Azure OpenAI and Gemini providers until live traffic records a status.
   */
  "status"?: AiGatewayProviderStatus;
  /**
   * Time when the resource was last updated.
   */
  "updatedAt": Date;
  /**
   * Whether this provider connection is covered by a zero data retention agreement.
   */
  "zdrEligible"?: boolean;
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
    credentialSource: {
      baseName: "credential_source",
      type: "AiGatewayProviderCredentialSource",
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
    status: {
      baseName: "status",
      type: "AiGatewayProviderStatus",
    },
    updatedAt: {
      baseName: "updated_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    zdrEligible: {
      baseName: "zdr_eligible",
      type: "boolean",
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
