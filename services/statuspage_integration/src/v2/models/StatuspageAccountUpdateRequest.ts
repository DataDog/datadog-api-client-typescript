import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { StatuspageAccountUpdateData } from "./StatuspageAccountUpdateData";

/**
 * Update request for a Statuspage account.
 */
export class StatuspageAccountUpdateRequest {
  /**
   * Statuspage account data for an update request.
   */
  "data": StatuspageAccountUpdateData;
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
      type: "StatuspageAccountUpdateData",
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
    return StatuspageAccountUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
