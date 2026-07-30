import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentTimestampOverrideDataAttributesRequest } from "./IncidentTimestampOverrideDataAttributesRequest";
import { IncidentTimestampOverrideType } from "./IncidentTimestampOverrideType";

/**
 * Timestamp override data in a create request.
 */
export class IncidentTimestampOverrideDataRequest {
  /**
   * Attributes for creating a timestamp override.
   */
  "attributes": IncidentTimestampOverrideDataAttributesRequest;
  /**
   * Incident timestamp override resource type.
   */
  "type": IncidentTimestampOverrideType;
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
      type: "IncidentTimestampOverrideDataAttributesRequest",
      required: true,
    },
    type: {
      baseName: "type",
      type: "IncidentTimestampOverrideType",
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
    return IncidentTimestampOverrideDataRequest.attributeTypeMap;
  }

  public constructor() {}
}
