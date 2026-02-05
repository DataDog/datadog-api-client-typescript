import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AssignSeatsUserRequestData } from "./AssignSeatsUserRequestData";

export class AssignSeatsUserRequest {
  "data"?: AssignSeatsUserRequestData;
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
      type: "AssignSeatsUserRequestData",
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
    return AssignSeatsUserRequest.attributeTypeMap;
  }

  public constructor() {}
}
