import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TeamsOwnershipMatchType } from "./TeamsOwnershipMatchType";

/**
 * The attributes of the mapping to add. `team_handle` and `view_name` are required
 * when `op` is `add`. At least one of `service` or `application_id` must be provided.
 */
export class TeamsOwnershipMappingBatchOperationDataAttributes {
  /**
   * The ID of the RUM application this mapping applies to.
   * For browser applications, provide the real application UUID — the team is applied to the view regardless of service.
   * For mobile applications, omit this field (or set it to the nil UUID `00000000-0000-0000-0000-000000000000`) — the team is applied to the view and service combination across all applications.
   */
  "applicationId"?: string;
  /**
   * How the `view_name` is matched against RUM view names.
   */
  "matchType"?: TeamsOwnershipMatchType;
  /**
   * The RUM application's service name. For browser applications, this is optional. For mobile applications, this is required and scopes the ownership to a specific service.
   */
  "service"?: string;
  /**
   * The handle of the team that owns the matched RUM views.
   */
  "teamHandle"?: string;
  /**
   * The RUM view name to match, or its prefix when `match_type` is `prefix`.
   */
  "viewName"?: string;
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
      format: "uuid",
    },
    matchType: {
      baseName: "match_type",
      type: "TeamsOwnershipMatchType",
    },
    service: {
      baseName: "service",
      type: "string",
    },
    teamHandle: {
      baseName: "team_handle",
      type: "string",
    },
    viewName: {
      baseName: "view_name",
      type: "string",
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
    return TeamsOwnershipMappingBatchOperationDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
