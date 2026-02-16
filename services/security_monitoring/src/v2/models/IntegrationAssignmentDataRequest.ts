import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IntegrationAssignmentDataAttributesRequest } from "./IntegrationAssignmentDataAttributesRequest";
import { IntegrationAssignmentType } from "./IntegrationAssignmentType";

export class IntegrationAssignmentDataRequest {
  "attributes": IntegrationAssignmentDataAttributesRequest;
  /**
   * Unique identifier of the integration assignment.
   */
  "id": string;
  /**
   * Integration assignment resource type.
   */
  "type": IntegrationAssignmentType;
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
      type: "IntegrationAssignmentDataAttributesRequest",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "IntegrationAssignmentType",
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
    return IntegrationAssignmentDataRequest.attributeTypeMap;
  }

  public constructor() {}
}
