import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { EntityOwnerDestination } from "./EntityOwnerDestination";

/**
 * Attributes for generating team campaign reports.
 */
export class GenerateCampaignTeamReportsRequestAttributes {
  /**
   * List of entity owners and their Slack destinations.
   */
  "entityOwners": Array<EntityOwnerDestination>;
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
    entityOwners: {
      baseName: "entity_owners",
      type: "Array<EntityOwnerDestination>",
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
    return GenerateCampaignTeamReportsRequestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
