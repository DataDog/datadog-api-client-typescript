import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OrgGroupCreateAttributes } from "./OrgGroupCreateAttributes";
import { OrgGroupType } from "./OrgGroupType";

/**
 * Data for creating an org group.
 */
export class OrgGroupCreateData {
  /**
   * Attributes for creating an org group.
   */
  "attributes": OrgGroupCreateAttributes;
  /**
   * Org groups resource type.
   */
  "type": OrgGroupType;
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
      type: "OrgGroupCreateAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "OrgGroupType",
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
    return OrgGroupCreateData.attributeTypeMap;
  }

  public constructor() {}
}
