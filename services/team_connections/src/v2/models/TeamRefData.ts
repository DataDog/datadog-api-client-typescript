import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TeamRefDataType } from "./TeamRefDataType";

/**
 * Reference to a Datadog team.
 */
export class TeamRefData {
  /**
   * The Datadog team ID.
   */
  "id": string;
  /**
   * Datadog team resource type.
   */
  "type": TeamRefDataType;
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
      type: "TeamRefDataType",
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
    return TeamRefData.attributeTypeMap;
  }

  public constructor() {}
}
