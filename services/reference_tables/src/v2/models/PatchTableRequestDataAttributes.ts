import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { PatchTableRequestDataAttributesFileMetadata } from "./PatchTableRequestDataAttributesFileMetadata";
import { PatchTableRequestDataAttributesSchema } from "./PatchTableRequestDataAttributesSchema";

/**
 * The definition of `PatchTableRequestDataAttributes` object.
 */
export class PatchTableRequestDataAttributes {
  /**
   * The description of the reference table.
   */
  "description"?: string;
  /**
   * The definition of `PatchTableRequestDataAttributesFileMetadata` object.
   */
  "fileMetadata"?: PatchTableRequestDataAttributesFileMetadata;
  /**
   * The definition of `PatchTableRequestDataAttributesSchema` object.
   */
  "schema"?: PatchTableRequestDataAttributesSchema;
  /**
   * Whether this table is synced automatically.
   */
  "syncEnabled"?: boolean;
  /**
   * The tags of the reference table.
   */
  "tags"?: Array<string>;
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
    description: {
      baseName: "description",
      type: "string",
    },
    fileMetadata: {
      baseName: "file_metadata",
      type: "PatchTableRequestDataAttributesFileMetadata",
    },
    schema: {
      baseName: "schema",
      type: "PatchTableRequestDataAttributesSchema",
    },
    syncEnabled: {
      baseName: "sync_enabled",
      type: "boolean",
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
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
    return PatchTableRequestDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
