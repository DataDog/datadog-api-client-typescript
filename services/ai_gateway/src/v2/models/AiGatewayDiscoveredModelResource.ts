import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiGatewayDiscoveredModelAttributes } from "./AiGatewayDiscoveredModelAttributes";
import { AiGatewayDiscoveredModelType } from "./AiGatewayDiscoveredModelType";

/**
 * Discovered provider model resource.
 */
export class AiGatewayDiscoveredModelResource {
  /**
   * Model discovered from a provider integration account.
   */
  "attributes": AiGatewayDiscoveredModelAttributes;
  /**
   * Resource identifier.
   */
  "id": string;
  /**
   * Discovered provider model resource type.
   */
  "type": AiGatewayDiscoveredModelType;
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
      type: "AiGatewayDiscoveredModelAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "AiGatewayDiscoveredModelType",
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
    return AiGatewayDiscoveredModelResource.attributeTypeMap;
  }

  public constructor() {}
}
