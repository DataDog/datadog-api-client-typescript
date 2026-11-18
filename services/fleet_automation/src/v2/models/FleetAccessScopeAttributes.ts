import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FleetAccessScopeFeatures } from "./FleetAccessScopeFeatures";

/**
 * Mutable fleet access scope attributes. PUT replaces all mutable attributes; omitted strings become empty and omitted feature flags become false.
 */
export class FleetAccessScopeAttributes {
  /**
   * Human-readable description of the access scope. Omission clears the description on update.
   */
  "description"?: string;
  /**
   * Fleet actions authorized on agents matching the access scope query.
   */
  "features"?: FleetAccessScopeFeatures;
  /**
   * Agent query selecting hosts covered by the scope. An empty query matches all hosts. Omission clears the query on update.
   */
  "query"?: string;
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
    description: {
      baseName: "description",
      type: "string",
    },
    features: {
      baseName: "features",
      type: "FleetAccessScopeFeatures",
    },
    query: {
      baseName: "query",
      type: "string",
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
    return FleetAccessScopeAttributes.attributeTypeMap;
  }

  public constructor() {}
}
