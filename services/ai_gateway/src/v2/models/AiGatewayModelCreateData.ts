import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiGatewayModelCatalogEntryType } from "./AiGatewayModelCatalogEntryType";
import { AiGatewayModelCreateAttributes } from "./AiGatewayModelCreateAttributes";

/**
 * Data used to create a model catalog entry.
 */
export class AiGatewayModelCreateData {
  /**
   * Attributes used to create a model catalog entry.
   */
  "attributes": AiGatewayModelCreateAttributes;
  /**
   * Model catalog entry resource type.
   */
  "type": AiGatewayModelCatalogEntryType;
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
      type: "AiGatewayModelCreateAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "AiGatewayModelCatalogEntryType",
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
    return AiGatewayModelCreateData.attributeTypeMap;
  }

  public constructor() {}
}
