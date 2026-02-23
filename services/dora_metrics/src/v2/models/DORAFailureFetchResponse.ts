import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DORAIncidentObject } from "./DORAIncidentObject";

/**
 * Response for fetching a single incident event.
 */
export class DORAFailureFetchResponse {
  /**
   * A DORA incident event.
   */
  "data"?: DORAIncidentObject;
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
    data: {
      baseName: "data",
      type: "DORAIncidentObject",
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
    return DORAFailureFetchResponse.attributeTypeMap;
  }

  public constructor() {}
}
