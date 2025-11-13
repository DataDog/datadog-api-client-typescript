import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TeamConnectionCreateData } from "./TeamConnectionCreateData";

/**
 * Request for creating team connections.
 */
export class TeamConnectionCreateRequest {
  /**
   * Array of team connections to create.
   */
  "data": Array<TeamConnectionCreateData>;
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
      type: "Array<TeamConnectionCreateData>",
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
    return TeamConnectionCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
