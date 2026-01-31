import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringDatasetDefinitionColumnType } from "./SecurityMonitoringDatasetDefinitionColumnType";

/**
 * A column in a dataset definition.
 */
export class SecurityMonitoringDatasetDefinitionColumn {
  /**
   * The name of the column.
   */
  "column": string;
  /**
   * The type of the column in a dataset definition.
   */
  "type": SecurityMonitoringDatasetDefinitionColumnType;
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
    column: {
      baseName: "column",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "SecurityMonitoringDatasetDefinitionColumnType",
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
    return SecurityMonitoringDatasetDefinitionColumn.attributeTypeMap;
  }

  public constructor() {}
}
