/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ExperimentsPatchExperimentV2ResponseDataAttributesWarehouseExposureConfigurationEntryPoint } from "./ExperimentsPatchExperimentV2ResponseDataAttributesWarehouseExposureConfigurationEntryPoint";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Warehouse exposure model and settings used to identify experiment assignments.
 */
export class ExperimentsPatchExperimentV2ResponseDataAttributesWarehouseExposureConfiguration {
  /**
   * Optional Warehouse measure that scopes analyzed subjects.
   */
  "entryPoint": ExperimentsPatchExperimentV2ResponseDataAttributesWarehouseExposureConfigurationEntryPoint | null;
  /**
   * Warehouse experiment key. Reads can return null for incomplete configuration; configuration writes require a value.
   */
  "experimentKey": string | null;
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
    return ExperimentsPatchExperimentV2ResponseDataAttributesWarehouseExposureConfiguration.attributeTypeMap;
  }

  public constructor() {}
}
