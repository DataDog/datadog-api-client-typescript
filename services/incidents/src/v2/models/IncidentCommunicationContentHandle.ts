import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * A handle used for sending a communication.
 */
export class IncidentCommunicationContentHandle {
  /**
   * Timestamp when the handle was added.
   */
  "createdAt"?: string;
  /**
   * The display name for the handle.
   */
  "displayName"?: string;
  /**
   * The notification handle.
   */
  "handle": string;
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
      type: "string",
    },
    displayName: {
      baseName: "display_name",
      type: "string",
    },
    handle: {
      baseName: "handle",
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
    return IncidentCommunicationContentHandle.attributeTypeMap;
  }

  public constructor() {}
}
