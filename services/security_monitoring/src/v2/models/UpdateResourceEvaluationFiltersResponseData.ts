import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ResourceFilterAttributes } from "./ResourceFilterAttributes";
import { ResourceFilterRequestType } from "./ResourceFilterRequestType";

/**
 * The definition of `UpdateResourceFilterResponseData` object.
 */
export class UpdateResourceEvaluationFiltersResponseData {
  /**
   * Attributes of a resource filter.
   */
  "attributes": ResourceFilterAttributes;
  /**
   * The `data` `id`.
   */
  "id"?: string;
  /**
   * Constant string to identify the request type.
   */
  "type": ResourceFilterRequestType;
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
      type: "ResourceFilterAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "ResourceFilterRequestType",
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
    return UpdateResourceEvaluationFiltersResponseData.attributeTypeMap;
  }

  public constructor() {}
}
