import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentHandleAttributesRequest } from "./IncidentHandleAttributesRequest";
import { IncidentHandleRelationshipsRequest } from "./IncidentHandleRelationshipsRequest";
import { IncidentHandleType } from "./IncidentHandleType";

export class IncidentHandleDataRequest {
  /**
   * Incident handle attributes for requests
   */
  "attributes": IncidentHandleAttributesRequest;
  /**
   * The ID of the incident handle (required for PUT requests)
   */
  "id"?: string;
  "relationships"?: IncidentHandleRelationshipsRequest;
  /**
   * Incident handle resource type
   */
  "type": IncidentHandleType;
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
      type: "IncidentHandleAttributesRequest",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
    },
    relationships: {
      baseName: "relationships",
      type: "IncidentHandleRelationshipsRequest",
    },
    type: {
      baseName: "type",
      type: "IncidentHandleType",
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
    return IncidentHandleDataRequest.attributeTypeMap;
  }

  public constructor() {}
}
