import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { HamrOrgConnectionStatus } from "./HamrOrgConnectionStatus";

export class HamrOrgConnectionAttributesResponse {
  /**
   * Status of the HAMR connection:
   * - 0: UNSPECIFIED - Connection status not specified
   * - 1: ONBOARDING - Initial setup of HAMR connection
   * - 2: PASSIVE - Secondary organization in passive standby mode
   * - 3: FAILOVER - Liminal status between PASSIVE and ACTIVE
   * - 4: ACTIVE - Organization is an active failover
   * - 5: RECOVERY - Recovery operation in progress
   */
  "hamrStatus": HamrOrgConnectionStatus;
  /**
   * Indicates whether this organization is the primary organization in the HAMR relationship.
   * If true, this is the primary organization. If false, this is the secondary/backup organization.
   */
  "isPrimary": boolean;
  /**
   * Timestamp of when this HAMR connection was last modified (RFC3339 format).
   */
  "modifiedAt": string;
  /**
   * Username or identifier of the user who last modified this HAMR connection.
   */
  "modifiedBy": string;
  /**
   * Datacenter location of the target organization (e.g., us1, eu1, us5).
   */
  "targetOrgDatacenter": string;
  /**
   * Name of the target organization in the HAMR relationship.
   */
  "targetOrgName": string;
  /**
   * UUID of the target organization in the HAMR relationship.
   */
  "targetOrgUuid": string;
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
    hamrStatus: {
      baseName: "hamr_status",
      type: "HamrOrgConnectionStatus",
      required: true,
    },
    isPrimary: {
      baseName: "is_primary",
      type: "boolean",
      required: true,
    },
    modifiedAt: {
      baseName: "modified_at",
      type: "string",
      required: true,
    },
    modifiedBy: {
      baseName: "modified_by",
      type: "string",
      required: true,
    },
    targetOrgDatacenter: {
      baseName: "target_org_datacenter",
      type: "string",
      required: true,
    },
    targetOrgName: {
      baseName: "target_org_name",
      type: "string",
      required: true,
    },
    targetOrgUuid: {
      baseName: "target_org_uuid",
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
    return HamrOrgConnectionAttributesResponse.attributeTypeMap;
  }

  public constructor() {}
}
