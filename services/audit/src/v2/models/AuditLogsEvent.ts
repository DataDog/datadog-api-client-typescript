import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AuditLogsEventAttributes } from "./AuditLogsEventAttributes";
import { AuditLogsEventType } from "./AuditLogsEventType";

/**
 * Object description of an Audit Logs event after it is processed and stored by Datadog.
 */
export class AuditLogsEvent {
  /**
   * JSON object containing all event attributes and their associated values.
   */
  "attributes"?: AuditLogsEventAttributes;
  /**
   * Unique ID of the event.
   */
  "id"?: string;
  /**
   * Type of the event.
   */
  "type"?: AuditLogsEventType;
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
      type: "AuditLogsEventAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "AuditLogsEventType",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return AuditLogsEvent.attributeTypeMap;
  }

  public constructor() {}
}
