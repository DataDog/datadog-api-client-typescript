import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { StatuspageAccountResponseAttributes } from "./StatuspageAccountResponseAttributes";
import { StatuspageAccountType } from "./StatuspageAccountType";

/**
 * Statuspage account data from a response.
 */
export class StatuspageAccountResponseData {
  /**
   * The attributes from a Statuspage account response.
   */
  "attributes": StatuspageAccountResponseAttributes;
  /**
   * Statuspage account resource type.
   */
  "type": StatuspageAccountType;
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
      type: "StatuspageAccountResponseAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "StatuspageAccountType",
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
    return StatuspageAccountResponseData.attributeTypeMap;
  }

  public constructor() {}
}
