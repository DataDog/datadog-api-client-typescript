import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringDatasetDefinition } from "./SecurityMonitoringDatasetDefinition";

/**
 * Attributes for updating a security monitoring dataset.
 */
export class SecurityMonitoringDatasetUpdateAttributesRequest {
  /**
   * The definition of a dataset, including its data source, name, indexes, and columns.
   */
  "definition": SecurityMonitoringDatasetDefinition;
  /**
   * A description of the dataset (maximum 255 characters).
   */
  "description": string;
  /**
   * The expected version of the dataset for concurrent modification detection.
   */
  "version"?: number;
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
    definition: {
      baseName: "definition",
      type: "SecurityMonitoringDatasetDefinition",
      required: true,
    },
    description: {
      baseName: "description",
      type: "string",
      required: true,
    },
    version: {
      baseName: "version",
      type: "number",
      format: "int64",
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
    return SecurityMonitoringDatasetUpdateAttributesRequest.attributeTypeMap;
  }

  public constructor() {}
}
