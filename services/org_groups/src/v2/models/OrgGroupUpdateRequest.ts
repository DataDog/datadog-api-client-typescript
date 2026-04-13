import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OrgGroupUpdateData } from "./OrgGroupUpdateData";

/**
 * Request to update an org group.
 */
export class OrgGroupUpdateRequest {
  /**
   * Data for updating an org group.
   */
  "data": OrgGroupUpdateData;
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
      type: "OrgGroupUpdateData",
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
    return OrgGroupUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
