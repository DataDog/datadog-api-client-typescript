import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OrgGroupCreateData } from "./OrgGroupCreateData";

/**
 * Request to create an org group.
 */
export class OrgGroupCreateRequest {
  /**
   * Data for creating an org group.
   */
  "data": OrgGroupCreateData;
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
      type: "OrgGroupCreateData",
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
    return OrgGroupCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
