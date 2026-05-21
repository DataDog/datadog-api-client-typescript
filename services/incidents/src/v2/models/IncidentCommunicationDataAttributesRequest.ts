import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentCommunicationContent } from "./IncidentCommunicationContent";
import { IncidentCommunicationKind } from "./IncidentCommunicationKind";

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
