/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Team creation attributes
 */
export class TeamCreateAttributes {
  /**
   * Unicode representation of the avatar for the team, limited to a single grapheme
   */
  "avatar"?: string;
  /**
   * Banner selection for the team
   */
  "banner"?: number;
  /**
   * Free-form markdown description/content for the team's homepage
   */
  "description"?: string;
  /**
   * The team's identifier
   */
  "handle": string;
  /**
   * The TeamCreateAttributes handles.
   */
  "handles"?: string;
  /**
   * Collection of hidden modules for the team
   */
  "hiddenModules"?: Array<string>;
  /**
   * The number of links belonging to the team
   */
  "linkCount"?: number;
  /**
   * The name of the team
   */
  "name": string;
  /**
   * A brief summary of the team
   */
  "summary"?: string;
  /**
   * Collection of visible modules for the team
   */
  "visibleModules"?: Array<string>;

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
    description: {
      baseName: "description",
      type: "string",
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
    hiddenModules: {
      baseName: "hidden_modules",
      type: "Array<string>",
    },
    linkCount: {
      baseName: "link_count",
      type: "number",
      format: "int32",
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
    visibleModules: {
      baseName: "visible_modules",
      type: "Array<string>",
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
    return TeamCreateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
