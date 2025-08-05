import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TeamSyncAttributesSource } from "./TeamSyncAttributesSource";
import { TeamSyncAttributesType } from "./TeamSyncAttributesType";

/**
 * Team sync attributes.
 */
export class TeamSyncAttributes {
  /**
   * The external source platform for team synchronization. Only "github" is supported.
   */
  "source": TeamSyncAttributesSource;
  /**
   * The type of synchronization operation. Only "link" is supported, which links existing teams by matching names.
   */
  "type": TeamSyncAttributesType;
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
    source: {
      baseName: "source",
      type: "TeamSyncAttributesSource",
      required: true,
    },
    type: {
      baseName: "type",
      type: "TeamSyncAttributesType",
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
    return TeamSyncAttributes.attributeTypeMap;
  }

  public constructor() {}
}
