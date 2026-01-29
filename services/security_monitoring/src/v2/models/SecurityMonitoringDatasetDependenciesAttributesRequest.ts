import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes for dataset dependencies request.
 */
export class SecurityMonitoringDatasetDependenciesAttributesRequest {
  /**
   * Array of dataset IDs to check dependencies for (minimum 1, maximum 100).
   */
  "datasetIds": Array<string>;
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
    datasetIds: {
      baseName: "datasetIds",
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
    return SecurityMonitoringDatasetDependenciesAttributesRequest.attributeTypeMap;
  }

  public constructor() {}
}
