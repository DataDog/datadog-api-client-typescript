/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ExperimentsPatchExperimentV2ResponseDataAttributesDatadogFlagConfigurationEntryPointFiltersItemsItemsColumnType } from "./ExperimentsPatchExperimentV2ResponseDataAttributesDatadogFlagConfigurationEntryPointFiltersItemsItemsColumnType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Complete Datadog split-by selection. Identify each property by column_name. Omit this field to copy organization defaults.
 */
export class ExperimentsCreateExperimentV2RequestDataAttributesSplitByPropertiesItems {
  /**
   * Exposure field that identifies the property.
   */
  "columnName": string;
  /**
   * Data type of the column evaluated by the entry-point filter.
   */
  "columnType"?: ExperimentsPatchExperimentV2ResponseDataAttributesDatadogFlagConfigurationEntryPointFiltersItemsItemsColumnType;
  /**
   * Optional display name. Defaults to column_name for a new property.
   */
  "name"?: string;

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
      type: "ExperimentsPatchExperimentV2ResponseDataAttributesDatadogFlagConfigurationEntryPointFiltersItemsItemsColumnType",
    },
    name: {
      baseName: "name",
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
    return ExperimentsCreateExperimentV2RequestDataAttributesSplitByPropertiesItems.attributeTypeMap;
  }

  public constructor() {}
}
