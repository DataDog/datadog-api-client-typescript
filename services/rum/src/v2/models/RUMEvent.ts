import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RUMEventAttributes } from "./RUMEventAttributes";
import { RUMEventType } from "./RUMEventType";

/**
 * Object description of a RUM event after being processed and stored by Datadog.
 */
export class RUMEvent {
  /**
   * JSON object containing all event attributes and their associated values.
   */
  "attributes"?: RUMEventAttributes;
  /**
   * Unique ID of the event.
   */
  "id"?: string;
  /**
   * Type of the event.
   */
  "type"?: RUMEventType;
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
      type: "RUMEventAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "RUMEventType",
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
    return RUMEvent.attributeTypeMap;
  }

  public constructor() {}
}
