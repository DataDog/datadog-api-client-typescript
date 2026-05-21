/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentCommunicationDataAttributesResponse } from "./IncidentCommunicationDataAttributesResponse";
import { IncidentCommunicationType } from "./IncidentCommunicationType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Incident communication data in a response.
 */
export class IncidentCommunicationDataResponse {
  /**
   * Attributes of an incident communication response.
   */
  "attributes": IncidentCommunicationDataAttributesResponse;
  /**
   * The communication identifier.
   */
  "id": string;
  /**
   * Incident communication resource type.
   */
  "type": IncidentCommunicationType;

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
    attributes: {
      baseName: "attributes",
      type: "IncidentCommunicationDataAttributesResponse",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
    },
    type: {
      baseName: "type",
      type: "IncidentCommunicationType",
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
    return IncidentCommunicationDataResponse.attributeTypeMap;
  }

  public constructor() {}
}
