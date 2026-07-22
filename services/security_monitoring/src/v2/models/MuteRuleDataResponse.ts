import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MuteRuleAttributesResponse } from "./MuteRuleAttributesResponse";
import { MuteRuleType } from "./MuteRuleType";

/**
 * The data object for a mute rule returned by the API.
 */
export class MuteRuleDataResponse {
  /**
   * Attributes of a mute rule returned by the API.
   */
  "attributes": MuteRuleAttributesResponse;
  /**
   * The ID of the mute rule.
   */
  "id": string;
  /**
   * The JSON:API type for mute rules.
   */
  "type": MuteRuleType;
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
    attributes: {
      baseName: "attributes",
      type: "MuteRuleAttributesResponse",
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
      type: "MuteRuleType",
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
    return MuteRuleDataResponse.attributeTypeMap;
  }

  public constructor() {}
}
