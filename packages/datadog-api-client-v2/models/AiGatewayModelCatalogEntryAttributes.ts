/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AiGatewayModelMetadata } from "./AiGatewayModelMetadata";
import { AiGatewayModelSource } from "./AiGatewayModelSource";
import { AiGatewaySupportedOperation } from "./AiGatewaySupportedOperation";

import { AttributeTypeMap, Int64 } from "../../datadog-api-client-common/util";

/**
 * Model catalog entry configuration and metadata.
 */
export class AiGatewayModelCatalogEntryAttributes {
  /**
   * Time when the resource was created.
   */
  "createdAt": Date;
  /**
   * Whether the resource is enabled.
   */
  "enabled": boolean;
  /**
   * Optional, typed enrichment for a model catalog entry. Missing properties remain unknown.
   */
  "metadata"?: AiGatewayModelMetadata;
  /**
   * Provider-independent model identifier.
   */
  "modelIdCanonical": string;
  /**
   * Model identifier sent to the provider.
   */
  "modelIdWire": string;
  /**
   * Provider identifier.
   */
  "providerId": Int64;
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
    metadata: {
      baseName: "metadata",
      type: "AiGatewayModelMetadata",
    },
    modelIdCanonical: {
      baseName: "model_id_canonical",
      type: "string",
      required: true,
    },
    modelIdWire: {
      baseName: "model_id_wire",
      type: "string",
      required: true,
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
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return AiGatewayModelCatalogEntryAttributes.attributeTypeMap;
  }

  public constructor() {}
}
