import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiGatewayModelCreateAttributes } from "./AiGatewayModelCreateAttributes";

/**
 * Attributes used to create several model catalog entries.
 */
export class AiGatewayModelsBulkCreateAttributes {
  "models": Array<AiGatewayModelCreateAttributes>;
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
    models: {
      baseName: "models",
      type: "Array<AiGatewayModelCreateAttributes>",
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
    return AiGatewayModelsBulkCreateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
