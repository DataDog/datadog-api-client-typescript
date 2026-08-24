/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TeamsOwnershipMatchType } from "./TeamsOwnershipMatchType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The attributes of a teams ownership mapping.
 */
export class TeamsOwnershipMappingResponseAttributes {
  /**
   * The ID of the RUM application this mapping applies to.
   * For browser applications, this is the real application UUID.
   * For mobile applications, this is the nil UUID `00000000-0000-0000-0000-000000000000` (wildcard), meaning the ownership applies across all applications.
   */
  "applicationId": string;
  /**
   * Timestamp when the mapping was created.
   */
  "createdAt": Date;
  /**
   * The UUID of the user who created the mapping.
   */
  "createdBy": string;
  /**
   * How the `view_name` is matched against RUM view names.
   */
  "matchType": TeamsOwnershipMatchType;
  /**
   * The ID of the organization that owns this mapping.
   */
  "orgId": number;
  /**
   * The RUM application's service name. For browser applications, may be empty. For mobile applications, this is the service that scopes the ownership.
   */
  "service": string;
  /**
   * The handle of the team that owns the matched RUM views.
   */
  "teamHandle": string;
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
    createdAt: {
      baseName: "created_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    createdBy: {
      baseName: "created_by",
      type: "string",
      required: true,
    },
    matchType: {
      baseName: "match_type",
      type: "TeamsOwnershipMatchType",
      required: true,
    },
    orgId: {
      baseName: "org_id",
      type: "number",
      required: true,
      format: "int64",
    },
    service: {
      baseName: "service",
      type: "string",
      required: true,
    },
    teamHandle: {
      baseName: "team_handle",
      type: "string",
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
    return TeamsOwnershipMappingResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
