import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiGatewayModelReasoningControl } from "./AiGatewayModelReasoningControl";

/**
 * Supported reasoning controls. Absence means controls are unknown or unavailable.
 */
export class AiGatewayModelReasoning {
  "controls": Array<AiGatewayModelReasoningControl>;
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
    controls: {
      baseName: "controls",
      type: "Array<AiGatewayModelReasoningControl>",
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
    return AiGatewayModelReasoning.attributeTypeMap;
  }

  public constructor() {}
}
