import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentTimestampOverridePatchDataAttributesRequest } from "./IncidentTimestampOverridePatchDataAttributesRequest";
import { IncidentTimestampOverrideType } from "./IncidentTimestampOverrideType";

/**
 * Timestamp override data in a patch request.
 */
export class IncidentTimestampOverridePatchDataRequest {
  /**
   * Attributes for patching a timestamp override. All fields are optional.
   */
  "attributes"?: IncidentTimestampOverridePatchDataAttributesRequest;
  /**
   * The timestamp override identifier.
   */
  "id": string;
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
      type: "IncidentTimestampOverridePatchDataAttributesRequest",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
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
    return IncidentTimestampOverridePatchDataRequest.attributeTypeMap;
  }

  public constructor() {}
}
