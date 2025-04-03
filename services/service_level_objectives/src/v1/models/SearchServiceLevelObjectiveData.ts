import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SearchServiceLevelObjectiveAttributes } from "./SearchServiceLevelObjectiveAttributes";

/**
 * A service level objective ID and attributes.
 */
export class SearchServiceLevelObjectiveData {
  /**
   * A service level objective object includes a service level indicator, thresholds
   * for one or more timeframes, and metadata (`name`, `description`, and `tags`).
   */
  "attributes"?: SearchServiceLevelObjectiveAttributes;
  /**
   * A unique identifier for the service level objective object.
   *
   * Always included in service level objective responses.
   */
  "id"?: string;
  /**
   * The type of the object, must be `slo`.
   */
  "type"?: string;
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
      type: "SearchServiceLevelObjectiveAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "string",
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
    return SearchServiceLevelObjectiveData.attributeTypeMap;
  }

  public constructor() {}
}
