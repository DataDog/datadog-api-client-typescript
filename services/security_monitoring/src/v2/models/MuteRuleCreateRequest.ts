import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MuteRuleDataCreate } from "./MuteRuleDataCreate";

/**
 * The body of a mute rule create request.
 */
export class MuteRuleCreateRequest {
  /**
   * The data object for a mute rule create or update request.
   */
  "data": MuteRuleDataCreate;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };
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
      type: "MuteRuleDataCreate",
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
    return MuteRuleCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
