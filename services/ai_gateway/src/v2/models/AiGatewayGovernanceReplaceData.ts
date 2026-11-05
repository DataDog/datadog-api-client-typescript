import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiGatewayGovernanceReplaceAttributes } from "./AiGatewayGovernanceReplaceAttributes";
import { AiGatewayGovernanceType } from "./AiGatewayGovernanceType";

/**
 * Data used to replace the organization's AI Gateway governance controls.
 */
export class AiGatewayGovernanceReplaceData {
  /**
   * Organization-wide AI Gateway governance controls to replace.
   */
  "attributes": AiGatewayGovernanceReplaceAttributes;
  /**
   * Optional singleton governance resource identifier. When provided, it must be `organization`.
   */
  "id"?: string;
  /**
   * AI Gateway governance resource type.
   */
  "type": AiGatewayGovernanceType;
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
      type: "AiGatewayGovernanceReplaceAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "AiGatewayGovernanceType",
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
    return AiGatewayGovernanceReplaceData.attributeTypeMap;
  }

  public constructor() {}
}
