import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiGatewayModelCapabilities } from "./AiGatewayModelCapabilities";
import { AiGatewayModelLimits } from "./AiGatewayModelLimits";
import { AiGatewayModelMetadataKind } from "./AiGatewayModelMetadataKind";
import { AiGatewayModelMetadataLifecycle } from "./AiGatewayModelMetadataLifecycle";
import { AiGatewayModelMetadataSource } from "./AiGatewayModelMetadataSource";
import { AiGatewayModelMetadataStatus } from "./AiGatewayModelMetadataStatus";
import { AiGatewayModelModalities } from "./AiGatewayModelModalities";
import { AiGatewayModelReasoning } from "./AiGatewayModelReasoning";
import { AiGatewayModelReferencePrice } from "./AiGatewayModelReferencePrice";

/**
 * Optional, typed enrichment for a model catalog entry. Missing properties remain unknown.
 */
export class AiGatewayModelMetadata {
  /**
   * Model features reported by the enrichment source. Omitted properties are unknown.
   */
  "capabilities": AiGatewayModelCapabilities;
  /**
   * Human-readable model description.
   */
  "description"?: string;
  /**
   * Human-readable model name.
   */
  "displayName"?: string;
  /**
   * Model family identifier.
   */
  "family"?: string;
  /**
   * Primary model kind. Decision models return a choice or score instead of generated text.
   */
  "kind"?: AiGatewayModelMetadataKind;
  /**
   * Knowledge cutoff reported by the source.
   */
  "knowledgeCutoff"?: string;
  /**
   * Date the source record was last updated.
   */
  "lastUpdated"?: string;
  /**
   * Model lifecycle state.
   */
  "lifecycle"?: AiGatewayModelMetadataLifecycle;
  /**
   * Token limits reported by the enrichment source.
   */
  "limits": AiGatewayModelLimits;
  /**
   * Supported model input and output modalities.
   */
  "modalities": AiGatewayModelModalities;
  /**
   * Whether model weights are openly available.
   */
  "openWeights"?: boolean;
  /**
   * Supported reasoning controls. Absence means controls are unknown or unavailable.
   */
  "reasoning"?: AiGatewayModelReasoning;
  /**
   * Provider-specific reference prices from the enrichment source. Omitted for shared canonical-model fallback matches. These do not determine gateway charges.
   */
  "referencePricing"?: Array<AiGatewayModelReferencePrice>;
  /**
   * Model release date.
   */
  "releaseDate"?: string;
  /**
   * Provenance for model metadata enrichment.
   */
  "source": AiGatewayModelMetadataSource;
  /**
   * Completeness of the matched source record. Partial also identifies metadata from a base model for a dated snapshot or from a shared canonical-model fallback.
   */
  "status": AiGatewayModelMetadataStatus;
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
    capabilities: {
      baseName: "capabilities",
      type: "AiGatewayModelCapabilities",
      required: true,
    },
    description: {
      baseName: "description",
      type: "string",
    },
    displayName: {
      baseName: "display_name",
      type: "string",
    },
    family: {
      baseName: "family",
      type: "string",
    },
    kind: {
      baseName: "kind",
      type: "AiGatewayModelMetadataKind",
    },
    knowledgeCutoff: {
      baseName: "knowledge_cutoff",
      type: "string",
    },
    lastUpdated: {
      baseName: "last_updated",
      type: "string",
    },
    lifecycle: {
      baseName: "lifecycle",
      type: "AiGatewayModelMetadataLifecycle",
    },
    limits: {
      baseName: "limits",
      type: "AiGatewayModelLimits",
      required: true,
    },
    modalities: {
      baseName: "modalities",
      type: "AiGatewayModelModalities",
      required: true,
    },
    openWeights: {
      baseName: "open_weights",
      type: "boolean",
    },
    reasoning: {
      baseName: "reasoning",
      type: "AiGatewayModelReasoning",
    },
    referencePricing: {
      baseName: "reference_pricing",
      type: "Array<AiGatewayModelReferencePrice>",
    },
    releaseDate: {
      baseName: "release_date",
      type: "string",
    },
    source: {
      baseName: "source",
      type: "AiGatewayModelMetadataSource",
      required: true,
    },
    status: {
      baseName: "status",
      type: "AiGatewayModelMetadataStatus",
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
    return AiGatewayModelMetadata.attributeTypeMap;
  }

  public constructor() {}
}
