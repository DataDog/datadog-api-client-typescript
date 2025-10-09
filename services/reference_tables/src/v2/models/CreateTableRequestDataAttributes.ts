import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreateTableRequestDataAttributesFileMetadata } from "./CreateTableRequestDataAttributesFileMetadata";
import { CreateTableRequestDataAttributesSchema } from "./CreateTableRequestDataAttributesSchema";
import { ReferenceTableCreateSourceType } from "./ReferenceTableCreateSourceType";

/**
 * The definition of `CreateTableRequestDataAttributes` object.
 */
export class CreateTableRequestDataAttributes {
  /**
   * The description of the reference table.
   */
  "description"?: string;
  /**
   * The definition of `CreateTableRequestDataAttributesFileMetadata` object.
   */
  "fileMetadata"?: CreateTableRequestDataAttributesFileMetadata;
  /**
   * The definition of `CreateTableRequestDataAttributesSchema` object.
   */
  "schema": CreateTableRequestDataAttributesSchema;
  /**
   * The source type for creating reference table data. Only these source types can be created through this API.
   */
  "source": ReferenceTableCreateSourceType;
  /**
   * The name of the reference table.
   */
  "tableName": string;
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
