import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { PatchComponentRequestDataAttributes } from "./PatchComponentRequestDataAttributes";
import { StatusPagesComponentGroupType } from "./StatusPagesComponentGroupType";

export class PatchComponentRequestData {
  /**
   * The supported attributes for updating a component.
   */
  "attributes"?: PatchComponentRequestDataAttributes;
  /**
   * The ID of the component.
   */
  "id"?: string;
  /**
   * Components resource type.
   */
  "type": StatusPagesComponentGroupType;
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
      type: "PatchComponentRequestDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
      format: "uuid",
    },
    type: {
      baseName: "type",
      type: "StatusPagesComponentGroupType",
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
    return PatchComponentRequestData.attributeTypeMap;
  }

  public constructor() {}
}
