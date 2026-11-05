import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiGatewayModelMetadata } from "./AiGatewayModelMetadata";
import { AiGatewayModelSource } from "./AiGatewayModelSource";
import { AiGatewaySupportedOperation } from "./AiGatewaySupportedOperation";

/**
 * Model catalog entry embedded in a model group.
 */
export class AiGatewayModelGroupModel {
  /**
   * Time when the resource was created.
   */
  "createdAt": Date;
  /**
   * Whether the resource is enabled.
   */
  "enabled": boolean;
  /**
   * Model catalog entry identifier.
   */
  "id": string;
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
    return AiGatewayModelGroupModel.attributeTypeMap;
  }

  public constructor() {}
}
