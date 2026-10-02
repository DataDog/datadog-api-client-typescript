import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExperimentsPatchExperimentV2ResponseDataAttributesWarehouseExposureConfigurationEntryPoint } from "./ExperimentsPatchExperimentV2ResponseDataAttributesWarehouseExposureConfigurationEntryPoint";

/**
 * Warehouse model and experiment key used to read assignment data.
 */
export class ExperimentsCreateExperimentV2RequestDataAttributesWarehouseExposureConfiguration {
  /**
   * Optional Warehouse measure that scopes analyzed subjects.
   */
  "entryPoint": ExperimentsPatchExperimentV2ResponseDataAttributesWarehouseExposureConfigurationEntryPoint | null;
  /**
   * Warehouse experiment key. Must not be blank.
   */
  "experimentKey": string;
  /**
   * ID of the exposure SQL model that provides assignment data.
   */
  "exposureSqlModelId": string;
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
    entryPoint: {
      baseName: "entry_point",
      type: "ExperimentsPatchExperimentV2ResponseDataAttributesWarehouseExposureConfigurationEntryPoint",
      required: true,
    },
    experimentKey: {
      baseName: "experiment_key",
      type: "string",
      required: true,
    },
    exposureSqlModelId: {
      baseName: "exposure_sql_model_id",
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
    return ExperimentsCreateExperimentV2RequestDataAttributesWarehouseExposureConfiguration.attributeTypeMap;
  }

  public constructor() {}
}
