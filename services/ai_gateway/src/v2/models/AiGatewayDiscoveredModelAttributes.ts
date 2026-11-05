import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiGatewaySupportedOperation } from "./AiGatewaySupportedOperation";

/**
 * Model discovered from a provider integration account.
 */
export class AiGatewayDiscoveredModelAttributes {
  /**
   * Human-readable model name.
   */
  "displayName"?: string;
  /**
   * Model identifier sent to the provider.
   */
  "modelIdWire": string;
  /**
   * Operations supported by the model.
   */
  "supportedOperations": Array<AiGatewaySupportedOperation>;
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
    displayName: {
      baseName: "display_name",
      type: "string",
    },
    modelIdWire: {
      baseName: "model_id_wire",
      type: "string",
      required: true,
    },
    supportedOperations: {
      baseName: "supported_operations",
      type: "Array<AiGatewaySupportedOperation>",
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
    return AiGatewayDiscoveredModelAttributes.attributeTypeMap;
  }

  public constructor() {}
}
