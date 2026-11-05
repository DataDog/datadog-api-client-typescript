import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiGatewaySupportedOperation } from "./AiGatewaySupportedOperation";

/**
 * Attributes used to update a model catalog entry.
 */
export class AiGatewayModelUpdateAttributes {
  /**
   * Model identifier sent to the provider.
   */
  "modelIdWire"?: string;
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
    modelIdWire: {
      baseName: "model_id_wire",
      type: "string",
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
    return AiGatewayModelUpdateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
