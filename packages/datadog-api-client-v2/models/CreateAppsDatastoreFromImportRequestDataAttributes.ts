/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CreateAppsDatastoreFromImportRequestDataAttributesPrimaryKeyGenerationStrategy } from "./CreateAppsDatastoreFromImportRequestDataAttributesPrimaryKeyGenerationStrategy";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The definition of `CreateAppsDatastoreFromImportRequestDataAttributes` object.
 */
export class CreateAppsDatastoreFromImportRequestDataAttributes {
  /**
   * The `attributes` `description`.
   */
  "description"?: string;
  /**
   * The `attributes` `name`.
   */
  "name": string;
  /**
   * The `attributes` `org_access`.
   */
  "orgAccess"?: string;
  /**
   * The `attributes` `primary_column_name`.
   */
  "primaryColumnName": string;
  /**
   * The `attributes` `primary_key_generation_strategy`.
   */
  "primaryKeyGenerationStrategy"?: CreateAppsDatastoreFromImportRequestDataAttributesPrimaryKeyGenerationStrategy;
  /**
   * The `attributes` `values`.
   */
  "values": Array<{ [key: string]: any }>;

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
      type: "CreateAppsDatastoreFromImportRequestDataAttributesPrimaryKeyGenerationStrategy",
    },
    values: {
      baseName: "values",
      type: "Array<{ [key: string]: any; }>",
      required: true,
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
    return CreateAppsDatastoreFromImportRequestDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
