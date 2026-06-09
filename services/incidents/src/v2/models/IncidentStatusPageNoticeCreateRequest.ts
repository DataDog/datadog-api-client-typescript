import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentStatusPageNoticeCreateData } from "./IncidentStatusPageNoticeCreateData";

/**
 * Request to publish a status page notice.
 */
export class IncidentStatusPageNoticeCreateRequest {
  /**
   * Data for publishing a status page notice.
   */
  "data": IncidentStatusPageNoticeCreateData;
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
      type: "IncidentStatusPageNoticeCreateData",
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
    return IncidentStatusPageNoticeCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
