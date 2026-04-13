/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of an org group.
 */
export class OrgGroupAttributes {
  /**
   * Timestamp when the org group was created.
   */
  "createdAt": Date;
  /**
   * Timestamp when the org group was last modified.
   */
  "modifiedAt": Date;
  /**
   * The name of the org group.
   */
  "name": string;
  /**
   * The site of the organization that owns this org group.
   */
  "ownerOrgSite": string;
  /**
   * The UUID of the organization that owns this org group.
   */
  "ownerOrgUuid": string;

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
    createdAt: {
      baseName: "created_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    modifiedAt: {
      baseName: "modified_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    ownerOrgSite: {
      baseName: "owner_org_site",
      type: "string",
      required: true,
    },
    ownerOrgUuid: {
      baseName: "owner_org_uuid",
      type: "string",
      required: true,
      format: "uuid",
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
    return OrgGroupAttributes.attributeTypeMap;
  }

  public constructor() {}
}
