import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExperimentsPatchExperimentV2ResponseDataAttributesWarehouseExposureConfigurationEntryPointFiltersItemsOperation } from "./ExperimentsPatchExperimentV2ResponseDataAttributesWarehouseExposureConfigurationEntryPointFiltersItemsOperation";

/**
 * A comparison that selects warehouse exposure data by a property.
 */
export class ExperimentsWarehouseExposureFilter {
  /**
   * Comparison applied by the warehouse entry-point filter.
   */
  "operation": ExperimentsPatchExperimentV2ResponseDataAttributesWarehouseExposureConfigurationEntryPointFiltersItemsOperation;
  /**
   * Warehouse property UUID.
   */
  "propertyId": string;
  /**
   * Ordered values used by the filter.
   */
  "values": Array<string>;
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
    operation: {
      baseName: "operation",
      type: "ExperimentsPatchExperimentV2ResponseDataAttributesWarehouseExposureConfigurationEntryPointFiltersItemsOperation",
      required: true,
    },
    propertyId: {
      baseName: "property_id",
      type: "string",
      required: true,
    },
    values: {
      baseName: "values",
      type: "Array<string>",
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
    return ExperimentsWarehouseExposureFilter.attributeTypeMap;
  }

  public constructor() {}
}
