import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes for dataset dependency.
 */
export class SecurityMonitoringDatasetDependencyAttributesResponse {
  /**
   * The count of resources that depend on the dataset.
   */
  "count": number;
  /**
   * Array of IDs of resources that depend on the dataset.
   */
  "ids": Array<string>;
  /**
   * The type of resource that depends on the dataset.
   */
  "resourceType": string;
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
    count: {
      baseName: "count",
      type: "number",
      required: true,
      format: "int64",
    },
    ids: {
      baseName: "ids",
      type: "Array<string>",
      required: true,
    },
    resourceType: {
      baseName: "resource_type",
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
    return SecurityMonitoringDatasetDependencyAttributesResponse.attributeTypeMap;
  }

  public constructor() {}
}
