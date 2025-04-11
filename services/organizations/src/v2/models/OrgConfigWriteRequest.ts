import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OrgConfigWrite } from "./OrgConfigWrite";

/**
 * A request to update an Org Config.
 */
export class OrgConfigWriteRequest {
  /**
   * An Org Config write operation.
   */
  "data": OrgConfigWrite;
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
      type: "OrgConfigWrite",
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
    return OrgConfigWriteRequest.attributeTypeMap;
  }

  public constructor() {}
}
