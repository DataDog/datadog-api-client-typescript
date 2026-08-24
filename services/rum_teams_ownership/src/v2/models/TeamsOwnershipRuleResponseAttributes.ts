import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TeamsOwnershipMatchType } from "./TeamsOwnershipMatchType";
import { TeamsOwnershipRuleTeamMapping } from "./TeamsOwnershipRuleTeamMapping";

/**
 * The attributes of a teams ownership rule.
 */
export class TeamsOwnershipRuleResponseAttributes {
  /**
   * The ID of the RUM application this mapping applies to.
   * For browser applications, this is the real application UUID.
   * For mobile applications, this is the nil UUID `00000000-0000-0000-0000-000000000000` (wildcard), meaning the ownership applies across all applications.
   */
  "applicationId": string;
  /**
   * How the `view_name` is matched against RUM view names.
   */
  "matchType": TeamsOwnershipMatchType;
  /**
   * The RUM application's service name. For browser applications, may be empty. For mobile applications, this is the service that scopes the ownership.
   */
  "service": string;
  /**
   * The teams that own the matched views, each paired with the ID of its underlying mapping.
   */
  "teams": Array<TeamsOwnershipRuleTeamMapping>;
  /**
   * The RUM view name to match, or its prefix when `match_type` is `prefix`.
   */
  "viewName": string;
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
    applicationId: {
      baseName: "application_id",
      type: "string",
      required: true,
    },
    matchType: {
      baseName: "match_type",
      type: "TeamsOwnershipMatchType",
      required: true,
    },
    service: {
      baseName: "service",
      type: "string",
      required: true,
    },
    teams: {
      baseName: "teams",
      type: "Array<TeamsOwnershipRuleTeamMapping>",
      required: true,
    },
    viewName: {
      baseName: "view_name",
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
    return TeamsOwnershipRuleResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
