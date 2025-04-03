import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ContainerItem } from "./ContainerItem";
import { ContainerMeta } from "./ContainerMeta";
import { ContainersResponseLinks } from "./ContainersResponseLinks";

/**
 * List of containers.
 */
export class ContainersResponse {
  /**
   * Array of Container objects.
   */
  "data"?: Array<ContainerItem>;
  /**
   * Pagination links.
   */
  "links"?: ContainersResponseLinks;
  /**
   * Response metadata object.
   */
  "meta"?: ContainerMeta;
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
    data: {
      baseName: "data",
      type: "Array<ContainerItem>",
    },
    links: {
      baseName: "links",
      type: "ContainersResponseLinks",
    },
    meta: {
      baseName: "meta",
      type: "ContainerMeta",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ContainersResponse.attributeTypeMap;
  }

  public constructor() {}
}
