import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OrgConfigRead } from "./OrgConfigRead";

/**
 * A response with multiple Org Configs.
 */
export class OrgConfigListResponse {
  /**
   * An array of Org Configs.
   */
  "data": Array<OrgConfigRead>;
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
      type: "Array<OrgConfigRead>",
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
    return OrgConfigListResponse.attributeTypeMap;
  }

  public constructor() {}
}
