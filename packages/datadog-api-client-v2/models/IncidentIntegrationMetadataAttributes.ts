/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentIntegrationMetadataMetadata } from "./IncidentIntegrationMetadataMetadata";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Incident integration metadata's attributes for a create request.
 */
export class IncidentIntegrationMetadataAttributes {
  /**
   * Timestamp when the incident todo was created.
   */
  "created"?: Date;
  /**
   * UUID of the incident this integration metadata is connected to.
   */
  "incidentId"?: string;
  /**
   * A number indicating the type of integration this metadata is for. 1 indicates Slack;
   * 8 indicates Jira.
   */
  "integrationType": number;
  /**
   * Incident integration metadata's metadata attribute.
   */
  "metadata": IncidentIntegrationMetadataMetadata;
  /**
   * Timestamp when the incident todo was last modified.
   */
  "modified"?: Date;
  /**
   * A number indicating the status of this integration metadata. 0 indicates unknown;
   * 1 indicates pending; 2 indicates complete; 3 indicates manually created;
   * 4 indicates manually updated; 5 indicates failed.
   */
  "status"?: number;

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
    created: {
      baseName: "created",
      type: "Date",
      format: "date-time",
    },
    incidentId: {
      baseName: "incident_id",
      type: "string",
    },
    integrationType: {
      baseName: "integration_type",
      type: "number",
      required: true,
      format: "int32",
    },
    metadata: {
      baseName: "metadata",
      type: "IncidentIntegrationMetadataMetadata",
      required: true,
    },
    modified: {
      baseName: "modified",
      type: "Date",
      format: "date-time",
    },
    status: {
      baseName: "status",
      type: "number",
      format: "int32",
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
    return IncidentIntegrationMetadataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
