import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OrgConfigRead } from "./OrgConfigRead";

/**
 * A response with a single Org Config.
 */
export class OrgConfigGetResponse {
  /**
   * A single Org Config.
   */
  "data": OrgConfigRead;
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
      type: "OrgConfigRead",
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
    return OrgConfigGetResponse.attributeTypeMap;
  }

  public constructor() {}
}
