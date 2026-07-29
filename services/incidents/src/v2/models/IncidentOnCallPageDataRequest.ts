import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentOnCallPageDataAttributesRequest } from "./IncidentOnCallPageDataAttributesRequest";
import { IncidentOnCallPageType } from "./IncidentOnCallPageType";

/**
 * On-call page data in a link request.
 */
export class IncidentOnCallPageDataRequest {
  /**
   * Attributes for linking a page to an incident.
   */
  "attributes"?: IncidentOnCallPageDataAttributesRequest;
  /**
   * The ID of the on-call page to link.
   */
  "id": string;
  /**
   * On-call page resource type.
   */
  "type": IncidentOnCallPageType;
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
      type: "IncidentOnCallPageDataAttributesRequest",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "IncidentOnCallPageType",
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
    return IncidentOnCallPageDataRequest.attributeTypeMap;
  }

  public constructor() {}
}
