/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentCommunicationContent } from "./IncidentCommunicationContent";
import { IncidentCommunicationKind } from "./IncidentCommunicationKind";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of an incident communication response.
 */
export class IncidentCommunicationDataAttributesResponse {
  /**
   * The kind of communication.
   */
  "communicationType": IncidentCommunicationKind;
  /**
   * The content of a communication.
   */
  "content": IncidentCommunicationContent;
  /**
   * Timestamp when the communication was created.
   */
  "created": Date;
  /**
   * The incident identifier.
   */
  "incidentId": string;
  /**
   * Timestamp when the communication was last modified.
   */
  "modified": Date;

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
    communicationType: {
      baseName: "communication_type",
      type: "IncidentCommunicationKind",
      required: true,
    },
    content: {
      baseName: "content",
      type: "IncidentCommunicationContent",
      required: true,
    },
    created: {
      baseName: "created",
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
    modified: {
      baseName: "modified",
      type: "Date",
      required: true,
      format: "date-time",
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
    return IncidentCommunicationDataAttributesResponse.attributeTypeMap;
  }

  public constructor() {}
}
