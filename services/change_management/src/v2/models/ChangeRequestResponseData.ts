import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ChangeRequestRelationships } from "./ChangeRequestRelationships";
import { ChangeRequestResourceType } from "./ChangeRequestResourceType";
import { ChangeRequestResponseAttributes } from "./ChangeRequestResponseAttributes";

/**
 * Data object for a change request response.
 */
export class ChangeRequestResponseData {
  /**
   * Attributes of a change request response.
   */
  "attributes": ChangeRequestResponseAttributes;
  /**
   * The identifier of the change request.
   */
  "id": string;
  /**
   * Relationships of a change request.
   */
  "relationships"?: ChangeRequestRelationships;
  /**
   * Change request resource type.
   */
  "type": ChangeRequestResourceType;
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
      type: "ChangeRequestResponseAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    relationships: {
      baseName: "relationships",
      type: "ChangeRequestRelationships",
    },
    type: {
      baseName: "type",
      type: "ChangeRequestResourceType",
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
    return ChangeRequestResponseData.attributeTypeMap;
  }

  public constructor() {}
}
