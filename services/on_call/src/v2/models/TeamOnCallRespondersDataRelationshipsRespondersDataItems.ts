import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TeamOnCallRespondersDataRelationshipsRespondersDataItemsType } from "./TeamOnCallRespondersDataRelationshipsRespondersDataItemsType";

/**
 * Represents a user responder associated with the on-call team.
 */
export class TeamOnCallRespondersDataRelationshipsRespondersDataItems {
  /**
   * Unique identifier of the responder.
   */
  "id": string;
  /**
   * Identifies the resource type for individual user entities associated with on-call response.
   */
  "type": TeamOnCallRespondersDataRelationshipsRespondersDataItemsType;
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
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "TeamOnCallRespondersDataRelationshipsRespondersDataItemsType",
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
    return TeamOnCallRespondersDataRelationshipsRespondersDataItems.attributeTypeMap;
  }

  public constructor() {}
}
