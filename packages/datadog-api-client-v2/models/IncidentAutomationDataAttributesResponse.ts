/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of incident automation data.
 */
export class IncidentAutomationDataAttributesResponse {
  /**
   * Timestamp when the data was created.
   */
  "createdAt": Date;
  /**
   * The incident identifier.
   */
  "incidentId": string;
  /**
   * The automation data key.
   */
  "key": string;
  /**
   * Timestamp when the data was last updated.
   */
  "updatedAt": Date;
  /**
   * The automation data value.
   */
  "value": string;

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
      baseName: "created_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    incidentId: {
      baseName: "incident_id",
      type: "string",
      required: true,
      format: "uuid",
    },
    key: {
      baseName: "key",
      type: "string",
      required: true,
    },
    updatedAt: {
      baseName: "updated_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    value: {
      baseName: "value",
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
    return IncidentAutomationDataAttributesResponse.attributeTypeMap;
  }

  public constructor() {}
}
