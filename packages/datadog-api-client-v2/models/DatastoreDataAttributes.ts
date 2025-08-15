/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DatastoreDataAttributesPrimaryKeyGenerationStrategy } from "./DatastoreDataAttributesPrimaryKeyGenerationStrategy";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The definition of `DatastoreDataAttributes` object.
 */
export class DatastoreDataAttributes {
  /**
   * The `attributes` `created_at`.
   */
  "createdAt"?: Date;
  /**
   * The `attributes` `creator_user_id`.
   */
  "creatorUserId"?: number;
  /**
   * The `attributes` `creator_user_uuid`.
   */
  "creatorUserUuid"?: string;
  /**
   * The `attributes` `description`.
   */
  "description"?: string;
  /**
   * The `attributes` `modified_at`.
   */
  "modifiedAt"?: Date;
  /**
   * The `attributes` `name`.
   */
  "name"?: string;
  /**
   * The `attributes` `org_id`.
   */
  "orgId"?: number;
  /**
   * The `attributes` `primary_column_name`.
   */
  "primaryColumnName"?: string;
  /**
   * The `attributes` `primary_key_generation_strategy`.
   */
  "primaryKeyGenerationStrategy"?: DatastoreDataAttributesPrimaryKeyGenerationStrategy;

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
      type: "DatastoreDataAttributesPrimaryKeyGenerationStrategy",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
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
