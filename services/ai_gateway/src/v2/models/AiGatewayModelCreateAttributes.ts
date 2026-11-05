import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiGatewaySupportedOperation } from "./AiGatewaySupportedOperation";

/**
 * Attributes used to create a model catalog entry.
 */
export class AiGatewayModelCreateAttributes {
  /**
   * Provider-independent model identifier.
   */
  "modelIdCanonical": string;
  /**
   * Model identifier sent to the provider.
   */
  "modelIdWire": string;
  /**
   * Operations supported by the model.
   */
  "supportedOperations"?: Array<AiGatewaySupportedOperation>;
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
    supportedOperations: {
      baseName: "supported_operations",
      type: "Array<AiGatewaySupportedOperation>",
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
    return AiGatewayModelCreateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
