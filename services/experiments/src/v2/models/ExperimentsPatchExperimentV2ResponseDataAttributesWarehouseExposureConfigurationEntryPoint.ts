import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExperimentsWarehouseExposureFilter } from "./ExperimentsWarehouseExposureFilter";

/**
 * Optional Warehouse measure that scopes analyzed subjects.
 */
export class ExperimentsPatchExperimentV2ResponseDataAttributesWarehouseExposureConfigurationEntryPoint {
  /**
   * Complete ordered Warehouse entry-point filter set.
   */
  "filters": Array<ExperimentsWarehouseExposureFilter>;
  /**
   * Warehouse measure UUID.
   */
  "measureId": string;
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
    filters: {
      baseName: "filters",
      type: "Array<ExperimentsWarehouseExposureFilter>",
      required: true,
    },
    measureId: {
      baseName: "measure_id",
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
    return ExperimentsPatchExperimentV2ResponseDataAttributesWarehouseExposureConfigurationEntryPoint.attributeTypeMap;
  }

  public constructor() {}
}
