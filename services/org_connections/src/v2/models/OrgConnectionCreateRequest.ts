import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OrgConnectionCreate } from "./OrgConnectionCreate";

/**
 * Request to create an org connection.
 */
export class OrgConnectionCreateRequest {
  /**
   * Org connection creation data.
   */
  "data": OrgConnectionCreate;
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
      type: "OrgConnectionCreate",
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
    return OrgConnectionCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
