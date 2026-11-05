import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiGatewayModelGroupType } from "./AiGatewayModelGroupType";
import { AiGatewayModelGroupUpdateAttributes } from "./AiGatewayModelGroupUpdateAttributes";

/**
 * Data used to update an AI Gateway model group.
 */
export class AiGatewayModelGroupUpdateData {
  /**
   * Attributes used to update an AI Gateway model group.
   */
  "attributes": AiGatewayModelGroupUpdateAttributes;
  /**
   * Resource identifier.
   */
  "id": string;
  /**
   * AI Gateway model group resource type.
   */
  "type": AiGatewayModelGroupType;
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
      type: "AiGatewayModelGroupUpdateAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "AiGatewayModelGroupType",
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
    return AiGatewayModelGroupUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
