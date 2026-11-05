import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiGatewayPolicyTargetRequest } from "./AiGatewayPolicyTargetRequest";

/**
 * Routing policy tier supplied in a request.
 */
export class AiGatewayPolicyTierRequest {
  /**
   * Routing priority.
   */
  "priority"?: number;
  "targets": Array<AiGatewayPolicyTargetRequest>;
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
    priority: {
      baseName: "priority",
      type: "number",
      format: "int64",
    },
    targets: {
      baseName: "targets",
      type: "Array<AiGatewayPolicyTargetRequest>",
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
    return AiGatewayPolicyTierRequest.attributeTypeMap;
  }

  public constructor() {}
}
