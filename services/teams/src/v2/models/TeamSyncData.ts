import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TeamSyncAttributes } from "./TeamSyncAttributes";
import { TeamSyncBulkType } from "./TeamSyncBulkType";

/**
 * Team sync data.
 */
export class TeamSyncData {
  /**
   * Team sync attributes.
   */
  "attributes": TeamSyncAttributes;
  /**
   * Team sync bulk type.
   */
  "type": TeamSyncBulkType;
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
      type: "TeamSyncAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "TeamSyncBulkType",
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
    return TeamSyncData.attributeTypeMap;
  }

  public constructor() {}
}
