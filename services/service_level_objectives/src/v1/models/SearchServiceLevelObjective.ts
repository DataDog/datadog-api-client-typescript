import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SearchServiceLevelObjectiveData } from "./SearchServiceLevelObjectiveData";

/**
 * A service level objective data container.
 */
export class SearchServiceLevelObjective {
  /**
   * A service level objective ID and attributes.
   */
  "data"?: SearchServiceLevelObjectiveData;
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
      type: "SearchServiceLevelObjectiveData",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SearchServiceLevelObjective.attributeTypeMap;
  }

  public constructor() {}
}
