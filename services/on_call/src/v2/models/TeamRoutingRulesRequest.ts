import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TeamRoutingRulesRequestData } from "./TeamRoutingRulesRequestData";

/**
 * Represents a request to create or update team routing rules, including the data payload.
 */
export class TeamRoutingRulesRequest {
  /**
   * Holds the data necessary to create or update team routing rules, including attributes, ID, and resource type.
   */
  "data"?: TeamRoutingRulesRequestData;
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
      type: "TeamRoutingRulesRequestData",
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
    return TeamRoutingRulesRequest.attributeTypeMap;
  }

  public constructor() {}
}
