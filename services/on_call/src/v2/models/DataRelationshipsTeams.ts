import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DataRelationshipsTeamsDataItems } from "./DataRelationshipsTeamsDataItems";

/**
 * Associates teams with this schedule in a data structure.
 */
export class DataRelationshipsTeams {
  /**
   * An array of team references for this schedule.
   */
  "data"?: Array<DataRelationshipsTeamsDataItems>;
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
      type: "Array<DataRelationshipsTeamsDataItems>",
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
    return DataRelationshipsTeams.attributeTypeMap;
  }

  public constructor() {}
}
