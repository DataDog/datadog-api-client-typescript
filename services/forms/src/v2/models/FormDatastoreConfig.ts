import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Configuration for the form's associated datastore.
 */
export class FormDatastoreConfig {
  /**
   * The unique identifier of the datastore.
   */
  "datastoreId": string;
  /**
   * The name of the primary key column.
   */
  "primaryColumnName": string;
  /**
   * The strategy used for generating primary keys.
   */
  "primaryKeyGenerationStrategy": string;
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
    datastoreId: {
      baseName: "datastore_id",
      type: "string",
      required: true,
      format: "uuid",
    },
    primaryColumnName: {
      baseName: "primary_column_name",
      type: "string",
      required: true,
    },
    primaryKeyGenerationStrategy: {
      baseName: "primary_key_generation_strategy",
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
    return FormDatastoreConfig.attributeTypeMap;
  }

  public constructor() {}
}
