/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Team update attributes
 */
export class TeamUpdateAttributes {
  /**
   * Unicode representation of the avatar for the team, limited to a single grapheme
   */
  "avatar"?: string;
  /**
   * Banner selection for the team
   */
  "banner"?: number;
  /**
   * An identifier for the color representing the team
   */
  "color"?: number;
  /**
   * Free-form markdown description/content for the team's homepage
   */
  "description"?: string;
  /**
   * The team's identifier
   */
  "handle": string;
  /**
   * Collection of hidden modules for the team
   */
  "hiddenModules"?: Array<string>;
  /**
   * The name of the team
   */
  "name": string;
  /**
   * Collection of visible modules for the team
   */
  "visibleModules"?: Array<string>;

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
    color: {
      baseName: "color",
      type: "number",
      format: "int32",
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
    hiddenModules: {
      baseName: "hidden_modules",
      type: "Array<string>",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    visibleModules: {
      baseName: "visible_modules",
      type: "Array<string>",
    },
  };
}
