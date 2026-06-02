import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { StatuspageUrlSettingCreateAttributes } from "./StatuspageUrlSettingCreateAttributes";
import { StatuspageUrlSettingType } from "./StatuspageUrlSettingType";

/**
 * Statuspage URL setting data for a create request.
 */
export class StatuspageUrlSettingCreateData {
  /**
   * The Statuspage URL setting attributes for a create request.
   */
  "attributes": StatuspageUrlSettingCreateAttributes;
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
      type: "StatuspageUrlSettingCreateAttributes",
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
    return StatuspageUrlSettingCreateData.attributeTypeMap;
  }

  public constructor() {}
}
