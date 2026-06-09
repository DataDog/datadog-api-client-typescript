import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes for publishing a status page notice.
 */
export class IncidentStatusPageNoticeCreateDataAttributes {
  /**
   * Map of component identifiers to their status.
   */
  "components"?: { [key: string]: string };
  /**
   * The message body of the notice.
   */
  "message"?: string;
  /**
   * The status of the notice.
   */
  "status"?: string;
  /**
   * The title of the notice.
   */
  "title"?: string;
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
    components: {
      baseName: "components",
      type: "{ [key: string]: string; }",
    },
    message: {
      baseName: "message",
      type: "string",
    },
    status: {
      baseName: "status",
      type: "string",
    },
    title: {
      baseName: "title",
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
    return IncidentStatusPageNoticeCreateDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
