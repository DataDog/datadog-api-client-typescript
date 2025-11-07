import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreateTableRequestDataAttributesFileMetadata } from "./CreateTableRequestDataAttributesFileMetadata";
import { CreateTableRequestDataAttributesSchema } from "./CreateTableRequestDataAttributesSchema";
import { ReferenceTableCreateSourceType } from "./ReferenceTableCreateSourceType";

/**
 * Attributes that define the reference table's configuration and properties.
 */
export class CreateTableRequestDataAttributes {
  /**
   * Optional text describing the purpose or contents of this reference table.
   */
  "description"?: string;
  /**
   * Metadata specifying where and how to access the reference table's data file.
   */
  "fileMetadata"?: CreateTableRequestDataAttributesFileMetadata;
  /**
   * Schema defining the structure and columns of the reference table.
   */
  "schema": CreateTableRequestDataAttributesSchema;
  /**
   * The source type for creating reference table data. Only these source types can be created through this API.
   */
  "source": ReferenceTableCreateSourceType;
  /**
   * Name to identify this reference table.
   */
  "tableName": string;
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
      type: "CreateTableRequestDataAttributesFileMetadata",
    },
    schema: {
      baseName: "schema",
      type: "CreateTableRequestDataAttributesSchema",
      required: true,
    },
    source: {
      baseName: "source",
      type: "ReferenceTableCreateSourceType",
      required: true,
    },
    tableName: {
      baseName: "table_name",
      type: "string",
      required: true,
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
    return CreateTableRequestDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
