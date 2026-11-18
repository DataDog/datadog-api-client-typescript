import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FleetAccessScopeAttributes } from "./FleetAccessScopeAttributes";
import { FleetAccessScopeResourceType } from "./FleetAccessScopeResourceType";

/**
 * A fleet access scope write payload. The update target is selected by the path ID.
 */
export class FleetAccessScopeWrite {
  /**
   * Mutable fleet access scope attributes. PUT replaces all mutable attributes; omitted strings become empty and omitted feature flags become false.
   */
  "attributes"?: FleetAccessScopeAttributes;
  /**
   * The JSON:API resource type for a fleet access scope.
   */
  "type": FleetAccessScopeResourceType;
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
      type: "FleetAccessScopeAttributes",
    },
    type: {
      baseName: "type",
      type: "FleetAccessScopeResourceType",
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
    return FleetAccessScopeWrite.attributeTypeMap;
  }

  public constructor() {}
}
