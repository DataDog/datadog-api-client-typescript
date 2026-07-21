/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes for creating a ServiceNow record for an incident.
 */
export class IncidentServiceNowRecordDataAttributesRequest {
  /**
   * The ServiceNow assignment group.
   */
  "assignmentGroup": string;
  /**
   * The ServiceNow configuration item mapping.
   */
  "configurationItemMapping": string;
  /**
   * The ServiceNow instance name.
   */
  "instanceName": string;
  /**
   * An existing ServiceNow record ID (Sys ID) to link instead of creating a new record.
   */
  "recordId"?: string;

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
    assignmentGroup: {
      baseName: "assignment_group",
      type: "string",
      required: true,
    },
    configurationItemMapping: {
      baseName: "configuration_item_mapping",
      type: "string",
      required: true,
    },
    instanceName: {
      baseName: "instance_name",
      type: "string",
      required: true,
    },
    recordId: {
      baseName: "record_id",
      type: "string",
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
    return IncidentServiceNowRecordDataAttributesRequest.attributeTypeMap;
  }

  public constructor() {}
}
