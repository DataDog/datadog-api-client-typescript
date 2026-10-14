import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DORAFailureType } from "./DORAFailureType";
import { DORAIncidentObjectAttributes } from "./DORAIncidentObjectAttributes";

/**
 * A DORA incident event.
 */
export class DORAIncidentObject {
  /**
   * The attributes of the incident event.
   */
  "attributes"?: DORAIncidentObjectAttributes;
  /**
   * The ID of the incident event.
   */
  "id"?: string;
  /**
   * JSON:API type for DORA incident events.
   */
  "type"?: DORAFailureType;
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
      type: "DORAIncidentObjectAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "DORAFailureType",
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
    return DORAIncidentObject.attributeTypeMap;
  }

  public constructor() {}
}
