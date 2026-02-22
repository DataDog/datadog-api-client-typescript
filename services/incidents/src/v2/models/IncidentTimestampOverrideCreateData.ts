import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentsTimestampOverridesType } from "./IncidentsTimestampOverridesType";
import { IncidentTimestampOverrideCreateAttributes } from "./IncidentTimestampOverrideCreateAttributes";

/**
 * Data for creating an incident timestamp override.
 */
export class IncidentTimestampOverrideCreateData {
  /**
   * Attributes for creating an incident timestamp override.
   */
  "attributes": IncidentTimestampOverrideCreateAttributes;
  /**
   * The JSON:API type for timestamp overrides.
   */
  "type": IncidentsTimestampOverridesType;
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
      type: "IncidentTimestampOverrideCreateAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "IncidentsTimestampOverridesType",
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
    return IncidentTimestampOverrideCreateData.attributeTypeMap;
  }

  public constructor() {}
}
