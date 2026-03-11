import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TeamSyncSelectionStateExternalIdType } from "./TeamSyncSelectionStateExternalIdType";

/**
 * The external identifier for a team or organization in the source platform.
 */
export class TeamSyncSelectionStateExternalId {
  /**
   * The type of external identifier for the selection state item.
   * For GitHub synchronization, the allowed values are `team` and
   * `organization`.
   */
  "type": TeamSyncSelectionStateExternalIdType;
  /**
   * The external identifier value from the source
   * platform. For GitHub, this is the string
   * representation of a GitHub organization ID or team
   * ID.
   */
  "value": string;
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
    type: {
      baseName: "type",
      type: "TeamSyncSelectionStateExternalIdType",
      required: true,
    },
    value: {
      baseName: "value",
      type: "string",
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
    return TeamSyncSelectionStateExternalId.attributeTypeMap;
  }

  public constructor() {}
}
