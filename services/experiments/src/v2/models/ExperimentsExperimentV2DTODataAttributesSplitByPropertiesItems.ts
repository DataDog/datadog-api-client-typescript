import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExperimentsPatchExperimentV2ResponseDataAttributesSplitByPropertiesItemsColumnType } from "./ExperimentsPatchExperimentV2ResponseDataAttributesSplitByPropertiesItemsColumnType";

/**
 * Property used to split experiment results into analysis dimensions.
 */
export class ExperimentsExperimentV2DTODataAttributesSplitByPropertiesItems {
  /**
   * Exposure field or Warehouse column used for the analysis dimension.
   */
  "columnName": string;
  /**
   * Type of the Datadog exposure field or Warehouse column.
   */
  "columnType": ExperimentsPatchExperimentV2ResponseDataAttributesSplitByPropertiesItemsColumnType;
  /**
   * Read-only property ID. Omit it from POST and PATCH; writes identify properties by column_name.
   */
  "id": string;
  /**
   * Display name for the analysis dimension.
   */
  "name": string;
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
      type: "ExperimentsPatchExperimentV2ResponseDataAttributesSplitByPropertiesItemsColumnType",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    name: {
      baseName: "name",
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
    return ExperimentsExperimentV2DTODataAttributesSplitByPropertiesItems.attributeTypeMap;
  }

  public constructor() {}
}
