import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiGatewayModelMetadata } from "./AiGatewayModelMetadata";
import { AiGatewayModelPricingAttributes } from "./AiGatewayModelPricingAttributes";
import { AiGatewayModelSource } from "./AiGatewayModelSource";
import { AiGatewayModelZdr } from "./AiGatewayModelZdr";
import { AiGatewaySupportedOperation } from "./AiGatewaySupportedOperation";

/**
 * Provider-specific entry for a canonical model.
 */
export class AiGatewayProviderModelEntry {
  /**
   * Time when the resource was created.
   */
  "createdAt": Date;
  /**
   * Whether the resource is enabled.
   */
  "enabled": boolean;
  /**
   * Resource identifier.
   */
  "id": string;
  /**
   * Optional, typed enrichment for a model catalog entry. Missing properties remain unknown.
   */
  "metadata"?: AiGatewayModelMetadata;
  /**
   * Model identifier sent to the provider.
   */
  "modelIdWire": string;
  /**
   * Attributes of a model pricing resource.
   */
  "pricing"?: AiGatewayModelPricingAttributes;
  /**
   * Provider identifier.
   */
  "providerId": number;
  /**
   * How a model catalog entry is managed.
   */
  "source": AiGatewayModelSource;
  /**
   * Operations supported by the model.
   */
  "supportedOperations": Array<AiGatewaySupportedOperation>;
  /**
   * Time when the resource was last updated.
   */
  "updatedAt": Date;
  /**
   * The Datadog side of a model's zero data retention eligibility. The customer side is the provider's
   * `zdr_eligible` setting.
   */
  "zdr"?: AiGatewayModelZdr;
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
    createdAt: {
      baseName: "created_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    enabled: {
      baseName: "enabled",
      type: "boolean",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    metadata: {
      baseName: "metadata",
      type: "AiGatewayModelMetadata",
    },
    modelIdWire: {
      baseName: "model_id_wire",
      type: "string",
      required: true,
    },
    pricing: {
      baseName: "pricing",
      type: "AiGatewayModelPricingAttributes",
    },
    providerId: {
      baseName: "provider_id",
      type: "number",
      required: true,
      format: "int64",
    },
    source: {
      baseName: "source",
      type: "AiGatewayModelSource",
      required: true,
    },
    supportedOperations: {
      baseName: "supported_operations",
      type: "Array<AiGatewaySupportedOperation>",
      required: true,
    },
    updatedAt: {
      baseName: "updated_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    zdr: {
      baseName: "zdr",
      type: "AiGatewayModelZdr",
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
    return AiGatewayProviderModelEntry.attributeTypeMap;
  }

  public constructor() {}
}
