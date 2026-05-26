import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The attributes of a dataset dependents entry.
 */
export class SecurityMonitoringDatasetDependentsAttributes {
  /**
   * The number of resources that depend on the dataset.
   */
  "count": number;
  /**
   * The UUID of the dataset whose dependencies are being reported.
   */
  "datasetId": string;
  /**
   * The list of resource IDs that depend on the dataset.
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
    datasetId: {
      baseName: "datasetId",
      type: "string",
      required: true,
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
    return SecurityMonitoringDatasetDependentsAttributes.attributeTypeMap;
  }

  public constructor() {}
}
