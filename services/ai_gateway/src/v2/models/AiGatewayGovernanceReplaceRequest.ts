import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiGatewayGovernanceReplaceData } from "./AiGatewayGovernanceReplaceData";

/**
 * Request to replace the organization's AI Gateway governance controls.
 */
export class AiGatewayGovernanceReplaceRequest {
  /**
   * Data used to replace the organization's AI Gateway governance controls.
   */
  "data": AiGatewayGovernanceReplaceData;
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
    data: {
      baseName: "data",
      type: "AiGatewayGovernanceReplaceData",
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
    return AiGatewayGovernanceReplaceRequest.attributeTypeMap;
  }

  public constructor() {}
}
