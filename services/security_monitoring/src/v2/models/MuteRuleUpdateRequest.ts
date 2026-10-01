import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MuteRuleDataUpdate } from "./MuteRuleDataUpdate";

/**
 * The body of a mute rule update request.
 */
export class MuteRuleUpdateRequest {
  /**
   * The data object for a mute rule update request. The `id` must match the `rule_id` path parameter.
   */
  "data": MuteRuleDataUpdate;
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
      type: "MuteRuleDataUpdate",
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
    return MuteRuleUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
