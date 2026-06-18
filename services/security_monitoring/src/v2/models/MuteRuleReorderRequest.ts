import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MuteRuleReorderItem } from "./MuteRuleReorderItem";

/**
 * The body of the mute rule reorder request.
 */
export class MuteRuleReorderRequest {
  /**
   * The ordered list of all mute rules; every rule must be included.
   */
  "data": Array<MuteRuleReorderItem>;
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
      type: "Array<MuteRuleReorderItem>",
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
    return MuteRuleReorderRequest.attributeTypeMap;
  }

  public constructor() {}
}
