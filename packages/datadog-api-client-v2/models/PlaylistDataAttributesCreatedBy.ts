/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Information about the user who created the playlist.
 */
export class PlaylistDataAttributesCreatedBy {
  /**
   * Email handle of the user who created the playlist.
   */
  "handle": string;
  /**
   * URL or identifier of the user's avatar icon.
   */
  "icon"?: string;
  /**
   * Unique identifier of the user who created the playlist.
   */
  "id": string;
  /**
   * Display name of the user who created the playlist.
   */
  "name"?: string;
  /**
   * UUID of the user who created the playlist.
   */
  "uuid": string;

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
    handle: {
      baseName: "handle",
      type: "string",
      required: true,
    },
    icon: {
      baseName: "icon",
      type: "string",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
    },
    uuid: {
      baseName: "uuid",
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
    return PlaylistDataAttributesCreatedBy.attributeTypeMap;
  }

  public constructor() {}
}
