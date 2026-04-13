import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OrgGroupData } from "./OrgGroupData";

/**
 * Response containing a single org group.
 */
export class OrgGroupResponse {
  /**
   * An org group resource.
   */
  "data": OrgGroupData;
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
      type: "OrgGroupData",
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
    return OrgGroupResponse.attributeTypeMap;
  }

  public constructor() {}
}
