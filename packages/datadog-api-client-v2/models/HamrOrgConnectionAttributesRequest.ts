/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { HamrOrgConnectionStatus } from "./HamrOrgConnectionStatus";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

export class HamrOrgConnectionAttributesRequest {
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
    return HamrOrgConnectionAttributesRequest.attributeTypeMap;
  }

  public constructor() {}
}
