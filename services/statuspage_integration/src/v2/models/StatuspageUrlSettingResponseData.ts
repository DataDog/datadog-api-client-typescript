import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { StatuspageUrlSettingResponseAttributes } from "./StatuspageUrlSettingResponseAttributes";
import { StatuspageUrlSettingType } from "./StatuspageUrlSettingType";

/**
 * Statuspage URL setting data from a response.
 */
export class StatuspageUrlSettingResponseData {
  /**
   * The attributes from a Statuspage URL setting response.
   */
  "attributes": StatuspageUrlSettingResponseAttributes;
  /**
   * The ID of the Statuspage URL setting.
   */
  "id": string;
  /**
   * Statuspage URL setting resource type.
   */
  "type": StatuspageUrlSettingType;
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
      type: "StatuspageUrlSettingResponseAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "StatuspageUrlSettingType",
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
    return StatuspageUrlSettingResponseData.attributeTypeMap;
  }

  public constructor() {}
}
