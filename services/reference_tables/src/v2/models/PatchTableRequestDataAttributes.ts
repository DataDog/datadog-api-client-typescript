import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { PatchTableRequestDataAttributesFileMetadata } from "./PatchTableRequestDataAttributesFileMetadata";
import { PatchTableRequestDataAttributesSchema } from "./PatchTableRequestDataAttributesSchema";

/**
 * Attributes that define the updates to the reference table's configuration and properties.
 */
export class PatchTableRequestDataAttributes {
  /**
   * Optional text describing the purpose or contents of this reference table.
   */
  "description"?: string;
  /**
   * Metadata specifying where and how to access the reference table's data file.
   */
  "fileMetadata"?: PatchTableRequestDataAttributesFileMetadata;
  /**
   * Schema defining the updates to the structure and columns of the reference table. Schema fields cannot be deleted or renamed.
   */
  "schema"?: PatchTableRequestDataAttributesSchema;
  /**
   * Whether this table is synced automatically.
   */
  "syncEnabled"?: boolean;
  /**
   * Tags for organizing and filtering reference tables.
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
