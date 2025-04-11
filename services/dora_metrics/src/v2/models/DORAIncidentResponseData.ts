import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DORAIncidentType } from "./DORAIncidentType";

/**
 * Response after receiving a DORA incident event.
 */
export class DORAIncidentResponseData {
  /**
   * The ID of the received DORA incident event.
   */
  "id": string;
  /**
   * JSON:API type for DORA incident events.
   */
  "type"?: DORAIncidentType;
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
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "DORAIncidentType",
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
    return DORAIncidentResponseData.attributeTypeMap;
  }

  public constructor() {}
}
