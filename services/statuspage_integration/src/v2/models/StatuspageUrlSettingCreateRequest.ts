import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { StatuspageUrlSettingCreateData } from "./StatuspageUrlSettingCreateData";

/**
 * Create request for a Statuspage URL setting.
 */
export class StatuspageUrlSettingCreateRequest {
  /**
   * Statuspage URL setting data for a create request.
   */
  "data": StatuspageUrlSettingCreateData;
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
      type: "StatuspageUrlSettingCreateData",
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
    return StatuspageUrlSettingCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
