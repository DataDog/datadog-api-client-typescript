/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Team attributes in hierarchy link context
 */
export class TeamHierarchyLinkTeamAttributes {
  /**
   * The team's avatar
   */
  "avatar"?: string;
  /**
   * The team's banner
   */
  "banner"?: number;
  /**
   * The team's handle
   */
  "handle": string;
  /**
   * Whether the team is managed
   */
  "isManaged"?: boolean;
  /**
   * Whether the team has open membership
   */
  "isOpenMembership"?: boolean;
  /**
   * The number of links for the team
   */
  "linkCount"?: number;
  /**
   * The team's name
   */
  "name": string;
  /**
   * The team's summary
   */
  "summary"?: string;
  /**
   * The number of users in the team
   */
  "userCount"?: number;

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
    avatar: {
      baseName: "avatar",
      type: "string",
    },
    banner: {
      baseName: "banner",
      type: "number",
      format: "int64",
    },
    handle: {
      baseName: "handle",
      type: "string",
      required: true,
    },
    isManaged: {
      baseName: "is_managed",
      type: "boolean",
    },
    isOpenMembership: {
      baseName: "is_open_membership",
      type: "boolean",
    },
    linkCount: {
      baseName: "link_count",
      type: "number",
      format: "int64",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    summary: {
      baseName: "summary",
      type: "string",
    },
    userCount: {
      baseName: "user_count",
      type: "number",
      format: "int64",
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
    return TeamHierarchyLinkTeamAttributes.attributeTypeMap;
  }

  public constructor() {}
}
