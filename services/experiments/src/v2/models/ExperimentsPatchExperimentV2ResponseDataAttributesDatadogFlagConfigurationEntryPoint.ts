import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExperimentsDatadogEntryPointFilter } from "./ExperimentsDatadogEntryPointFilter";

/**
 * Datadog measure and filters used to select analyzed subjects.
 */
export class ExperimentsPatchExperimentV2ResponseDataAttributesDatadogFlagConfigurationEntryPoint {
  /**
   * Complete Datadog OR-of-ANDs entry-point filter expression.
   */
  "filters": Array<Array<ExperimentsDatadogEntryPointFilter>>;
  /**
   * Datadog measure UUID.
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
      type: "Array<Array<ExperimentsDatadogEntryPointFilter>>",
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
    return ExperimentsPatchExperimentV2ResponseDataAttributesDatadogFlagConfigurationEntryPoint.attributeTypeMap;
  }

  public constructor() {}
}
