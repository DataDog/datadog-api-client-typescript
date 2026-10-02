/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ExperimentsCreateExposureSQLModelV2RequestDataAttributesItemsColumnType } from "./ExperimentsCreateExposureSQLModelV2RequestDataAttributesItemsColumnType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A property column defined by a metric SQL model.
 */
export class ExperimentsMetricSQLModelPropertyInput {
  /**
   * Name of the SQL result column that supplies this property.
   */
  "columnName": string;
  /**
   * Data type of a column in the SQL model.
   */
  "columnType": ExperimentsCreateExposureSQLModelV2RequestDataAttributesItemsColumnType;
  /**
   * Optional text that explains what this property represents.
   */
  "description"?: string;
  /**
   * Opaque metadata preserved when this property is migrated.
   */
  "migrationMetadata"?: any;
  /**
   * Name used to identify the property in the model.
   */
  "name": string;

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
    columnName: {
      baseName: "column_name",
      type: "string",
      required: true,
    },
    columnType: {
      baseName: "column_type",
      type: "ExperimentsCreateExposureSQLModelV2RequestDataAttributesItemsColumnType",
      required: true,
    },
    description: {
      baseName: "description",
      type: "string",
    },
    migrationMetadata: {
      baseName: "migration_metadata",
      type: "any",
    },
    name: {
      baseName: "name",
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
    return ExperimentsMetricSQLModelPropertyInput.attributeTypeMap;
  }

  public constructor() {}
}
