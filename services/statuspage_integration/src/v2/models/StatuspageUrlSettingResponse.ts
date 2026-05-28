import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { StatuspageUrlSettingResponseData } from "./StatuspageUrlSettingResponseData";

/**
 * Response containing a Statuspage URL setting.
 */
export class StatuspageUrlSettingResponse {
  /**
   * Statuspage URL setting data from a response.
   */
  "data": StatuspageUrlSettingResponseData;
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
      type: "StatuspageUrlSettingResponseData",
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
    return StatuspageUrlSettingResponse.attributeTypeMap;
  }

  public constructor() {}
}
