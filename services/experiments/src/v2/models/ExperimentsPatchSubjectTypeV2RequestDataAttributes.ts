import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Fields supplied to update the subject type.
 */
export class ExperimentsPatchSubjectTypeV2RequestDataAttributes {
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
    return ExperimentsPatchSubjectTypeV2RequestDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
