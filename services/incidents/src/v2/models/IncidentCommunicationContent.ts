import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentCommunicationContentHandle } from "./IncidentCommunicationContentHandle";

/**
 * The content of a communication.
 */
export class IncidentCommunicationContent {
  /**
   * A key used for grouping communications.
   */
  "groupingKey"?: string;
  /**
   * The list of handles the communication is sent to.
   */
  "handles": Array<IncidentCommunicationContentHandle>;
  /**
   * The message body of the communication.
   */
  "message": string;
  /**
   * The status code of the communication.
   */
  "status"?: number;
  /**
   * The subject line of the communication.
   */
  "subject"?: string;
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
    groupingKey: {
      baseName: "grouping_key",
      type: "string",
    },
    handles: {
      baseName: "handles",
      type: "Array<IncidentCommunicationContentHandle>",
      required: true,
    },
    message: {
      baseName: "message",
      type: "string",
      required: true,
    },
    status: {
      baseName: "status",
      type: "number",
      format: "int32",
    },
    subject: {
      baseName: "subject",
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
    return IncidentCommunicationContent.attributeTypeMap;
  }

  public constructor() {}
}
