/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Optional Datadog measure. Use null when the other measure is selected.
 */
export class ExperimentsNullableDatadogMetricMeasureInput {
  /**
   * Name of the Datadog event field used by this measure.
   */
  "columnName"?: string;
  /**
   * Data type of the source column.
   */
  "columnType": string;
  /**
   * Conditions used to select the metric's source data.
   */
  "filters"?: any;
  /**
   * Display name of the Datadog measure.
   */
  "name": string;
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
  "sourceSubtype": string;
  /**
   * Type of Datadog data source used for the measure.
   */
  "sourceType": string;

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
      required: true,
    },
    filters: {
      baseName: "filters",
      type: "any",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
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
      required: true,
    },
    sourceType: {
      baseName: "source_type",
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
    return ExperimentsNullableDatadogMetricMeasureInput.attributeTypeMap;
  }

  public constructor() {}
}
