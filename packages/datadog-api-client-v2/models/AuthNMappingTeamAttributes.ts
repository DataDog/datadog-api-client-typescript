/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Team attributes.
 */
export class AuthNMappingTeamAttributes {
  /**
   * Unicode representation of the avatar for the team, limited to a single grapheme
   */
  "avatar"?: string;
  /**
   * Banner selection for the team
   */
  "banner"?: number;
  /**
   * The team's identifier
   */
  "handle"?: string;
  /**
   * The number of links belonging to the team
   */
  "linkCount"?: number;
  /**
   * The name of the team
   */
  "name"?: string;
  /**
   * A brief summary of the team, derived from the `description`
   */
  "summary"?: string;
  /**
   * The number of users belonging to the team
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
    },
    linkCount: {
      baseName: "link_count",
      type: "number",
      format: "int32",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    summary: {
      baseName: "summary",
      type: "string",
    },
    userCount: {
      baseName: "user_count",
      type: "number",
      format: "int32",
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
    return AuthNMappingTeamAttributes.attributeTypeMap;
  }

  public constructor() {}
}
