import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiGatewayBudgetAttributes } from "./AiGatewayBudgetAttributes";
import { AiGatewayBudgetType } from "./AiGatewayBudgetType";

/**
 * AI Gateway budget resource.
 */
export class AiGatewayBudgetResource {
  /**
   * AI Gateway budget configuration and metadata.
   */
  "attributes": AiGatewayBudgetAttributes;
  /**
   * Resource identifier.
   */
  "id": string;
  /**
   * AI Gateway budget resource type.
   */
  "type": AiGatewayBudgetType;
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
      type: "AiGatewayBudgetAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
    },
    type: {
      baseName: "type",
      type: "AiGatewayBudgetType",
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
    return AiGatewayBudgetResource.attributeTypeMap;
  }

  public constructor() {}
}
