import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { PlaylistDataAttributesCreatedBy } from "./PlaylistDataAttributesCreatedBy";

/**
 * Attributes of a RUM replay playlist, including its name, description, session count, and audit timestamps.
 */
export class PlaylistDataAttributes {
  /**
   * Timestamp when the playlist was created.
   */
  "createdAt"?: Date;
  /**
   * Information about the user who created the playlist.
   */
  "createdBy"?: PlaylistDataAttributesCreatedBy;
  /**
   * Optional human-readable description of the playlist's purpose or contents.
   */
  "description"?: string;
  /**
   * Human-readable name of the playlist.
   */
  "name": string;
  /**
   * Number of replay sessions in the playlist.
   */
  "sessionCount"?: number;
  /**
   * Timestamp when the playlist was last updated.
   */
  "updatedAt"?: Date;
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
      format: "date-time",
    },
    createdBy: {
      baseName: "created_by",
      type: "PlaylistDataAttributesCreatedBy",
    },
    description: {
      baseName: "description",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    sessionCount: {
      baseName: "session_count",
      type: "number",
      format: "int64",
    },
    updatedAt: {
      baseName: "updated_at",
      type: "Date",
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
    return PlaylistDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
