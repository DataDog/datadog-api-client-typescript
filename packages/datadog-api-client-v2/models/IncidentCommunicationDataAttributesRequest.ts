/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentCommunicationContent } from "./IncidentCommunicationContent";
import { IncidentCommunicationKind } from "./IncidentCommunicationKind";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes for creating or updating a communication.
 */
export class IncidentCommunicationDataAttributesRequest {
  /**
   * The kind of communication.
   */
  "communicationType": IncidentCommunicationKind;
  /**
   * The content of a communication.
   */
  "content": IncidentCommunicationContent;

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
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return IncidentCommunicationDataAttributesRequest.attributeTypeMap;
  }

  public constructor() {}
}
