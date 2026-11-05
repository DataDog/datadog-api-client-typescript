import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiGatewayProviderModelEntry } from "./AiGatewayProviderModelEntry";

/**
 * Provider entries grouped under one canonical model ID.
 */
export class AiGatewayModelsByCanonicalAttributes {
  /**
   * Provider-independent model identifier.
   */
  "modelIdCanonical": string;
  "providers": Array<AiGatewayProviderModelEntry>;
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
    providers: {
      baseName: "providers",
      type: "Array<AiGatewayProviderModelEntry>",
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
    return AiGatewayModelsByCanonicalAttributes.attributeTypeMap;
  }

  public constructor() {}
}
