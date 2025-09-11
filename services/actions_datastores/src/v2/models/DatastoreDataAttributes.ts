import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DatastorePrimaryKeyGenerationStrategy } from "./DatastorePrimaryKeyGenerationStrategy";

/**
 * Detailed information about a datastore.
 */
export class DatastoreDataAttributes {
  /**
   * Timestamp when the datastore was created.
   */
  "createdAt"?: Date;
  /**
   * The numeric ID of the user who created the datastore.
   */
  "creatorUserId"?: number;
  /**
   * The UUID of the user who created the datastore.
   */
  "creatorUserUuid"?: string;
  /**
   * A human-readable description about the datastore.
   */
  "description"?: string;
  /**
   * Timestamp when the datastore was last modified.
   */
  "modifiedAt"?: Date;
  /**
   * The display name of the datastore.
   */
  "name"?: string;
  /**
   * The ID of the organization that owns this datastore.
   */
  "orgId"?: number;
  /**
   * The name of the primary key column for this datastore. Primary column names:
   *   - Must abide by both [PostgreSQL naming conventions](https://www.postgresql.org/docs/7.0/syntax525.htm)
   *   - Cannot exceed 63 characters
   */
  "primaryColumnName"?: string;
  /**
   * Can be set to `uuid` to automatically generate primary keys when new items are added. Default value is `none`, which requires you to supply a primary key for each new item.
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
    createdAt: {
      baseName: "created_at",
      type: "Date",
      format: "date-time",
    },
    creatorUserId: {
      baseName: "creator_user_id",
      type: "number",
      format: "int64",
    },
    creatorUserUuid: {
      baseName: "creator_user_uuid",
      type: "string",
    },
    description: {
      baseName: "description",
      type: "string",
    },
    modifiedAt: {
      baseName: "modified_at",
      type: "Date",
      format: "date-time",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    orgId: {
      baseName: "org_id",
      type: "number",
      format: "int64",
    },
    primaryColumnName: {
      baseName: "primary_column_name",
      type: "string",
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
    return DatastoreDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
