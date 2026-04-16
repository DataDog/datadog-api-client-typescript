import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IoCExplorerListResponseAttributes } from "./IoCExplorerListResponseAttributes";

/**
 * IoC Explorer list response data object.
 */
export class IoCExplorerListResponseData {
  /**
   * Attributes of the IoC Explorer list response.
   */
  "attributes"?: IoCExplorerListResponseAttributes;
  /**
   * Unique identifier for the response.
   */
  "id"?: string;
  /**
   * Response type identifier.
   */
  "type"?: string;
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
      type: "IoCExplorerListResponseAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "string",
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
    return IoCExplorerListResponseData.attributeTypeMap;
  }

  public constructor() {}
}
