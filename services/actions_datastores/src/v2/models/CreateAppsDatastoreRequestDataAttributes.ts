import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DatastorePrimaryKeyGenerationStrategy } from "./DatastorePrimaryKeyGenerationStrategy";

/**
 * Configuration and metadata to create a new datastore.
 */
export class CreateAppsDatastoreRequestDataAttributes {
  /**
   * A human-readable description about the datastore.
   */
  "description"?: string;
  /**
   * The display name for the new datastore.
   */
  "name": string;
  /**
   * The organization access level for the datastore (e.g., 'contributor').
   */
  "orgAccess"?: string;
  /**
   * The name of the column that will serve as the primary key for items in this datastore. Cannot exceed 63 characters.
   */
  "primaryColumnName": string;
  /**
   * Can be set to `uuid` to automatically generate primary keys when new items are added. Default value is `none` which requires you to supply a primary key for each new item.
   */
  "primaryKeyGenerationStrategy"?: DatastorePrimaryKeyGenerationStrategy;
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
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    orgAccess: {
      baseName: "org_access",
      type: "string",
    },
    primaryColumnName: {
      baseName: "primary_column_name",
      type: "string",
      required: true,
    },
    primaryKeyGenerationStrategy: {
      baseName: "primary_key_generation_strategy",
      type: "DatastorePrimaryKeyGenerationStrategy",
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
    return CreateAppsDatastoreRequestDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
