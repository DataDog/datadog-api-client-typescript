import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { StatuspageUrlSettingResponseData } from "./StatuspageUrlSettingResponseData";

/**
 * Response with a list of Statuspage URL settings.
 */
export class StatuspageUrlSettingsResponse {
  /**
   * An array of Statuspage URL settings.
   */
  "data": Array<StatuspageUrlSettingResponseData>;
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
      type: "Array<StatuspageUrlSettingResponseData>",
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
    return StatuspageUrlSettingsResponse.attributeTypeMap;
  }

  public constructor() {}
}
