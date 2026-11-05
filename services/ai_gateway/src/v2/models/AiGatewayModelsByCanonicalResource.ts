import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiGatewayModelsByCanonicalAttributes } from "./AiGatewayModelsByCanonicalAttributes";
import { AiGatewayModelsByCanonicalType } from "./AiGatewayModelsByCanonicalType";

/**
 * Canonical model grouping resource.
 */
export class AiGatewayModelsByCanonicalResource {
  /**
   * Provider entries grouped under one canonical model ID.
   */
  "attributes": AiGatewayModelsByCanonicalAttributes;
  /**
   * Resource identifier.
   */
  "id": string;
  /**
   * Canonical model grouping resource type.
   */
  "type": AiGatewayModelsByCanonicalType;
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
    attributes: {
      baseName: "attributes",
      type: "AiGatewayModelsByCanonicalAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "AiGatewayModelsByCanonicalType",
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
    return AiGatewayModelsByCanonicalResource.attributeTypeMap;
  }

  public constructor() {}
}
