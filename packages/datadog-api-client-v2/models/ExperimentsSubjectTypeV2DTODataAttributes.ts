/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Details of the subject type.
 */
export class ExperimentsSubjectTypeV2DTODataAttributes {
  /**
   * Time when this resource was created.
   */
  "createdAt"?: Date;
  /**
   * Number of experiments that reference this resource.
   */
  "experimentCount"?: number;
  /**
   * Number of exposure sources that reference this subject type.
   */
  "exposureSourceCount"?: number;
  /**
   * Whether this is the organization's default subject type.
   */
  "isDefault"?: boolean;
  /**
   * Number of metric SQL models that reference this subject type.
   */
  "metricSqlModelCount"?: number;
  /**
   * Metadata retained for resources imported from another system.
   */
  "migrationMetadata"?: any;
  /**
   * Display name of the subject type.
   */
  "name"?: string;
  /**
   * Product Analytics attribute used to identify subjects of this type.
   */
  "productAnalyticsAttribute"?: string;
  /**
   * Number of protocols that reference this subject type.
   */
  "protocolCount"?: number;
  /**
   * Time when this resource was last updated.
   */
  "updatedAt"?: Date;
  /**
   * Warehouse columns that identify subjects of this type.
   */
  "warehouseColumnNames"?: Array<string>;

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
    experimentCount: {
      baseName: "experiment_count",
      type: "number",
      format: "int64",
    },
    exposureSourceCount: {
      baseName: "exposure_source_count",
      type: "number",
      format: "int64",
    },
    isDefault: {
      baseName: "is_default",
      type: "boolean",
    },
    metricSqlModelCount: {
      baseName: "metric_sql_model_count",
      type: "number",
      format: "int64",
    },
    migrationMetadata: {
      baseName: "migration_metadata",
      type: "any",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    productAnalyticsAttribute: {
      baseName: "product_analytics_attribute",
      type: "string",
    },
    protocolCount: {
      baseName: "protocol_count",
      type: "number",
      format: "int64",
    },
    updatedAt: {
      baseName: "updated_at",
      type: "Date",
      format: "date-time",
    },
    warehouseColumnNames: {
      baseName: "warehouse_column_names",
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
    return ExperimentsSubjectTypeV2DTODataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
