import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The attributes of a dataset dependencies request.
 */
export class SecurityMonitoringDatasetDependenciesRequestAttributes {
  /**
   * The list of dataset UUIDs to query dependencies for. Must contain between 1 and 100 items.
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
    return SecurityMonitoringDatasetDependenciesRequestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
