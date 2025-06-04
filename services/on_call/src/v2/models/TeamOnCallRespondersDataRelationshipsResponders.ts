import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TeamOnCallRespondersDataRelationshipsRespondersDataItems } from "./TeamOnCallRespondersDataRelationshipsRespondersDataItems";

/**
 * Defines the list of users assigned as on-call responders for the team.
 */
export class TeamOnCallRespondersDataRelationshipsResponders {
  /**
   * Array of user references associated as responders.
   */
  "data"?: Array<TeamOnCallRespondersDataRelationshipsRespondersDataItems>;
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
      type: "Array<TeamOnCallRespondersDataRelationshipsRespondersDataItems>",
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
    return TeamOnCallRespondersDataRelationshipsResponders.attributeTypeMap;
  }

  public constructor() {}
}
