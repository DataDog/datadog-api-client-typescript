/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Name and data field mappings for the new subject type.
 */
export class ExperimentsCreateSubjectTypeV2RequestDataAttributes {
  /**
   * Metadata associated with migration of this resource.
   */
  "migrationMetadata"?: any;
  /**
   * Display name of the subject type.
   */
  "name": string;
  /**
   * Product Analytics attribute used to identify subjects of this type.
   */
  "productAnalyticsAttribute"?: string;
  /**
   * Warehouse column names associated with this subject type.
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
    migrationMetadata: {
      baseName: "migration_metadata",
      type: "any",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    productAnalyticsAttribute: {
      baseName: "product_analytics_attribute",
      type: "string",
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
    return ExperimentsCreateSubjectTypeV2RequestDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
