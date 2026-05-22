/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentCommunicationDataAttributesRequest } from "./IncidentCommunicationDataAttributesRequest";
import { IncidentCommunicationType } from "./IncidentCommunicationType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Incident communication data for a request.
 */
export class IncidentCommunicationDataRequest {
  /**
   * Attributes for creating or updating a communication.
   */
  "attributes": IncidentCommunicationDataAttributesRequest;
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
      type: "IncidentCommunicationDataAttributesRequest",
      required: true,
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
    return IncidentCommunicationDataRequest.attributeTypeMap;
  }

  public constructor() {}
}
