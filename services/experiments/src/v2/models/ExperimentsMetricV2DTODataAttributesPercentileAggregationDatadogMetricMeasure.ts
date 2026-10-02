import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Datadog source and query that supply values for the metric.
 */
export class ExperimentsMetricV2DTODataAttributesPercentileAggregationDatadogMetricMeasure {
  /**
   * Name of the Datadog event field used by this measure.
   */
  "columnName"?: string;
  /**
   * Data type of the source column.
   */
  "columnType"?: string;
  /**
   * Conditions used to select the metric's source data.
   */
  "filters"?: any;
  /**
   * Display name of the Datadog measure.
   */
  "name"?: string;
  /**
   * Query used to retrieve the Datadog measure.
   */
  "query"?: string;
  /**
   * Filter applied to the Datadog source definition.
   */
  "sourceDefinitionFilter"?: any;
  /**
   * Subtype of the Datadog data source.
   */
  "sourceSubtype"?: string;
  /**
   * Type of Datadog data source used for the measure.
   */
  "sourceType"?: string;
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
    },
    columnType: {
      baseName: "column_type",
      type: "string",
    },
    filters: {
      baseName: "filters",
      type: "any",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    query: {
      baseName: "query",
      type: "string",
    },
    sourceDefinitionFilter: {
      baseName: "source_definition_filter",
      type: "any",
    },
    sourceSubtype: {
      baseName: "source_subtype",
      type: "string",
    },
    sourceType: {
      baseName: "source_type",
      type: "string",
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
    return ExperimentsMetricV2DTODataAttributesPercentileAggregationDatadogMetricMeasure.attributeTypeMap;
  }

  public constructor() {}
}
