import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { StatuspageUrlSettingUpdateData } from "./StatuspageUrlSettingUpdateData";

/**
 * Update request for a Statuspage URL setting.
 */
export class StatuspageUrlSettingUpdateRequest {
  /**
   * Statuspage URL setting data for an update request.
   */
  "data": StatuspageUrlSettingUpdateData;
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
      type: "StatuspageUrlSettingUpdateData",
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
    return StatuspageUrlSettingUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
