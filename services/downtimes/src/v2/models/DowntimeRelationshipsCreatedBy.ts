import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DowntimeRelationshipsCreatedByData } from "./DowntimeRelationshipsCreatedByData";

/**
 * The user who created the downtime.
 */
export class DowntimeRelationshipsCreatedBy {
  /**
   * Data for the user who created the downtime.
   */
  "data"?: DowntimeRelationshipsCreatedByData;
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
      type: "DowntimeRelationshipsCreatedByData",
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
    return DowntimeRelationshipsCreatedBy.attributeTypeMap;
  }

  public constructor() {}
}
