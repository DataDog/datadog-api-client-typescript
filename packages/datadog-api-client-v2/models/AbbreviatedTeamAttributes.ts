/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The definition of `AbbreviatedTeamAttributes` object.
 */
export class AbbreviatedTeamAttributes {
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
  "handle": string;
  /**
   * The `AbbreviatedTeamAttributes` `handles`.
   */
  "handles"?: string;
  /**
   * The `AbbreviatedTeamAttributes` `is_open_membership`.
   */
  "isOpenMembership"?: boolean;
  /**
   * The name of the team
   */
  "name": string;
  /**
   * A brief summary of the team
   */
  "summary"?: string;

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
    handles: {
      baseName: "handles",
      type: "string",
    },
    isOpenMembership: {
      baseName: "is_open_membership",
      type: "boolean",
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
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return AbbreviatedTeamAttributes.attributeTypeMap;
  }

  public constructor() {}
}
