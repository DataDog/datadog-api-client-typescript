import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringDatasetDefinition } from "./SecurityMonitoringDatasetDefinition";

/**
 * The attributes of a Cloud SIEM dataset.
 */
export class SecurityMonitoringDatasetAttributesResponse {
  /**
   * The creation timestamp of the dataset, in ISO 8601 format.
   */
  "createdAt": string;
  /**
   * The Datadog handle of the user who created the dataset.
   */
  "createdByHandle": string;
  /**
   * The display name of the user who created the dataset.
   */
  "createdByName": string;
  /**
   * The definition of the dataset. The shape depends on the value of `data_source`.
   * Use `reference_table` or `managed_resource` for a referential dataset, or one of the
   * event platform sources (for example `logs`, `audit`, `events`, `spans`, `rum`) for
   * an event platform dataset.
   */
  "definition": SecurityMonitoringDatasetDefinition;
  /**
   * The description of the dataset.
   */
  "description": string;
  /**
   * The UUID of the dataset.
   */
  "id": string;
  /**
   * Whether the dataset is an out-of-the-box dataset provided by Datadog.
   */
  "isDefault": boolean;
  /**
   * Whether the dataset is marked as deprecated.
   */
  "isDeprecated": boolean;
  /**
   * The timestamp of the last modification of the dataset, in ISO 8601 format.
   */
  "modifiedAt": string;
  /**
   * The unique name of the dataset.
   */
  "name": string;
  /**
   * The Datadog handle of the user who last updated the dataset.
   */
  "updatedByHandle": string | null;
  /**
   * The display name of the user who last updated the dataset.
   */
  "updatedByName": string | null;
  /**
   * The current version of the dataset.
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
      type: "string",
      required: true,
    },
    createdByHandle: {
      baseName: "createdByHandle",
      type: "string",
      required: true,
    },
    createdByName: {
      baseName: "createdByName",
      type: "string",
      required: true,
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
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    isDefault: {
      baseName: "isDefault",
      type: "boolean",
      required: true,
    },
    isDeprecated: {
      baseName: "isDeprecated",
      type: "boolean",
      required: true,
    },
    modifiedAt: {
      baseName: "modifiedAt",
      type: "string",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    updatedByHandle: {
      baseName: "updatedByHandle",
      type: "string",
      required: true,
    },
    updatedByName: {
      baseName: "updatedByName",
      type: "string",
      required: true,
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
