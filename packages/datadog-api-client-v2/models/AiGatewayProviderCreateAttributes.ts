/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AiGatewayKnownProvider } from "./AiGatewayKnownProvider";
import { AiGatewayModelInput } from "./AiGatewayModelInput";
import { AiGatewayProviderInitialBinding } from "./AiGatewayProviderInitialBinding";
import { AiGatewayProviderIntegrationConfig } from "./AiGatewayProviderIntegrationConfig";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes used to create an AI Gateway provider.
 */
export class AiGatewayProviderCreateAttributes {
  /**
   * Multiplier applied to provider costs. Must be greater than 0 and at most 1000000.
   */
  "costMultiplier"?: number;
  /**
   * Reserved for initial View/Edit permissions. Supplying this attribute, including an empty array or null, returns HTTP 503 before discovery or persistence. Omit it for normal creation.
   */
  "initialBindings"?: Array<AiGatewayProviderInitialBinding>;
  /**
   * Provider integration account identifier.
   */
  "integrationAccountId"?: string;
  /**
   * Provider-specific integration configuration.
   */
  "integrationConfig"?: AiGatewayProviderIntegrationConfig;
  /**
   * Known provider implementation.
   */
  "knownProvider"?: AiGatewayKnownProvider;
  /**
   * Manually managed models to add alongside models discovered from the provider integration.
   */
  "models"?: Array<AiGatewayModelInput>;
  /**
   * Human-readable resource name.
   */
  "name": string;
  /**
   * Immutable routing identifier.
   */
  "slug": string;

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
      format: "double",
    },
    initialBindings: {
      baseName: "initial_bindings",
      type: "Array<AiGatewayProviderInitialBinding>",
    },
    integrationAccountId: {
      baseName: "integration_account_id",
      type: "string",
    },
    integrationConfig: {
      baseName: "integration_config",
      type: "AiGatewayProviderIntegrationConfig",
    },
    knownProvider: {
      baseName: "known_provider",
      type: "AiGatewayKnownProvider",
    },
    models: {
      baseName: "models",
      type: "Array<AiGatewayModelInput>",
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
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return AiGatewayProviderCreateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
