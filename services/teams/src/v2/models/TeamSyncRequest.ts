import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TeamSyncData } from "./TeamSyncData";

/**
 * Team sync request.
 */
export class TeamSyncRequest {
  /**
   * Team sync data.
   */
  "data": TeamSyncData;
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
      type: "TeamSyncData",
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
    return TeamSyncRequest.attributeTypeMap;
  }

  public constructor() {}
}
