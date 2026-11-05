/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AiGatewayModelMetadataSourceMatchedBy } from "./AiGatewayModelMetadataSourceMatchedBy";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Provenance for model metadata enrichment.
 */
export class AiGatewayModelMetadataSource {
  /**
   * Identifier strategy used to match the gateway catalog entry. Date-suffix and shared canonical-model fallback matches produce partial metadata.
   */
  "matchedBy": AiGatewayModelMetadataSourceMatchedBy;
  /**
   * Model identifier in the metadata source provider catalog.
   */
  "modelId": string;
  /**
   * Metadata source name.
   */
  "name": string;
  /**
   * Last successful observation of this valid source record. Retained invalid entries keep their previous timestamp.
   */
  "observedAt"?: Date;
  /**
   * Provider namespace in the metadata source, or canonical for a shared model record.
   */
  "provider": string;
  /**
   * SHA-256 content revision of the source snapshot that supplied this record.
   */
  "revision"?: string;

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
    matchedBy: {
      baseName: "matched_by",
      type: "AiGatewayModelMetadataSourceMatchedBy",
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
    observedAt: {
      baseName: "observed_at",
      type: "Date",
      format: "date-time",
    },
    provider: {
      baseName: "provider",
      type: "string",
      required: true,
    },
    revision: {
      baseName: "revision",
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
    return AiGatewayModelMetadataSource.attributeTypeMap;
  }

  public constructor() {}
}
