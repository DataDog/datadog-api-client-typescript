import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringDatasetDefinition } from "./SecurityMonitoringDatasetDefinition";

/**
 * Attributes of a security monitoring dataset.
 */
export class SecurityMonitoringDatasetAttributesResponse {
  /**
   * The creation timestamp of the dataset.
   */
  "createdAt": Date;
  /**
   * The handle of the user who created the dataset.
   */
  "createdByHandle"?: string;
  /**
   * The name of the user who created the dataset.
   */
  "createdByName"?: string;
  /**
   * The definition of a dataset, including its data source, name, indexes, and columns.
   */
  "definition": SecurityMonitoringDatasetDefinition;
  /**
   * A description of the dataset.
   */
  "description": string;
  /**
   * The last modification timestamp of the dataset.
   */
  "modifiedAt"?: Date;
  /**
   * The name of the dataset.
   */
  "name": string;
  /**
   * The organization ID.
   */
  "orgId": number;
  /**
   * The handle of the user who last updated the dataset.
   */
  "updatedByHandle"?: string;
  /**
   * The name of the user who last updated the dataset.
   */
  "updatedByName"?: string;
  /**
   * The version of the dataset.
   */
  "version": number;
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
    createdAt: {
      baseName: "createdAt",
      type: "Date",
      required: true,
      format: "date-time",
    },
    createdByHandle: {
      baseName: "createdByHandle",
      type: "string",
    },
    createdByName: {
      baseName: "createdByName",
      type: "string",
    },
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
    modifiedAt: {
      baseName: "modifiedAt",
      type: "Date",
      format: "date-time",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    orgId: {
      baseName: "orgId",
      type: "number",
      required: true,
      format: "int64",
    },
    updatedByHandle: {
      baseName: "updatedByHandle",
      type: "string",
    },
    updatedByName: {
      baseName: "updatedByName",
      type: "string",
    },
    version: {
      baseName: "version",
      type: "number",
      required: true,
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
    return SecurityMonitoringDatasetAttributesResponse.attributeTypeMap;
  }

  public constructor() {}
}
