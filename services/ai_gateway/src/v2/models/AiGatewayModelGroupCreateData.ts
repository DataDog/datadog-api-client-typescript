import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiGatewayModelGroupCreateAttributes } from "./AiGatewayModelGroupCreateAttributes";
import { AiGatewayModelGroupType } from "./AiGatewayModelGroupType";

/**
 * Data used to create an AI Gateway model group.
 */
export class AiGatewayModelGroupCreateData {
  /**
   * Attributes used to create an AI Gateway model group.
   */
  "attributes": AiGatewayModelGroupCreateAttributes;
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
      type: "AiGatewayModelGroupCreateAttributes",
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
    return AiGatewayModelGroupCreateData.attributeTypeMap;
  }

  public constructor() {}
}
