import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TeamHierarchyLinkCreate } from "./TeamHierarchyLinkCreate";

/**
 * Request to create a team hierarchy link
 */
export class TeamHierarchyLinkCreateRequest {
  /**
   * Data provided when creating a team hierarchy link
   */
  "data": TeamHierarchyLinkCreate;
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
      type: "TeamHierarchyLinkCreate",
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
    return TeamHierarchyLinkCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
