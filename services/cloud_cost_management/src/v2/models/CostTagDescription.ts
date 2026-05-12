import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CostTagDescriptionAttributes } from "./CostTagDescriptionAttributes";
import { CostTagDescriptionType } from "./CostTagDescriptionType";

/**
 * A Cloud Cost Management tag key description, either cross-cloud or scoped to a single cloud provider.
 */
export class CostTagDescription {
  /**
   * Human-readable description and metadata attached to a Cloud Cost Management tag key, optionally scoped to a single cloud provider.
   */
  "attributes": CostTagDescriptionAttributes;
  /**
   * Stable identifier of the tag description. Equals the tag key when the description is the cross-cloud default; encodes both the cloud and the tag key when the description is cloud-specific.
   */
  "id": string;
  /**
   * Type of the Cloud Cost Management tag description resource.
   */
  "type": CostTagDescriptionType;
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
      type: "CostTagDescriptionAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "CostTagDescriptionType",
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
    return CostTagDescription.attributeTypeMap;
  }

  public constructor() {}
}
