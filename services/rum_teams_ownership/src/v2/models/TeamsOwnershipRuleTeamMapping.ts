import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * An individual team's ownership entry within a teams ownership rule.
 */
export class TeamsOwnershipRuleTeamMapping {
  /**
   * The ID of the underlying mapping, used to delete this team's ownership individually.
   */
  "mappingId": string;
  /**
   * The handle of the owning team.
   */
  "teamHandle": string;
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
    mappingId: {
      baseName: "mapping_id",
      type: "string",
      required: true,
    },
    teamHandle: {
      baseName: "team_handle",
      type: "string",
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
    return TeamsOwnershipRuleTeamMapping.attributeTypeMap;
  }

  public constructor() {}
}
