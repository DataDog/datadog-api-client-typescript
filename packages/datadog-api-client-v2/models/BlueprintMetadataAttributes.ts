/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The attributes of a blueprint metadata resource.
 */
export class BlueprintMetadataAttributes {
  /**
   * The timestamp when the blueprint was created.
   */
  "createdAt": Date;
  /**
   * A description of what the blueprint does.
   */
  "description": string;
  /**
   * The human-readable name of the blueprint.
   */
  "name": string;
  /**
   * The unique slug identifier of the blueprint.
   */
  "slug": string;
  /**
   * Tags associated with the blueprint.
   */
  "tags"?: Array<string>;
  /**
   * The background style of the blueprint tile.
   */
  "tileBackground"?: string;
  /**
   * The fully qualified name of the action used as the tile icon.
   */
  "tileIconActionFqn"?: string;
  /**
   * The timestamp when the blueprint was last updated.
   */
  "updatedAt": Date;

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
    description: {
      baseName: "description",
      type: "string",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    slug: {
      baseName: "slug",
      type: "string",
      required: true,
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
    },
    tileBackground: {
      baseName: "tile_background",
      type: "string",
    },
    tileIconActionFqn: {
      baseName: "tile_icon_action_fqn",
      type: "string",
    },
    updatedAt: {
      baseName: "updated_at",
      type: "Date",
      required: true,
      format: "date-time",
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
    return BlueprintMetadataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
