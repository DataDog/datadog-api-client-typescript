import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ContainerImageItem } from "./ContainerImageItem";
import { ContainerImageMeta } from "./ContainerImageMeta";
import { ContainerImagesResponseLinks } from "./ContainerImagesResponseLinks";

/**
 * List of Container Images or Container Image groups.
 */
export class ContainerImagesResponse {
  /**
   * Array of `container_image` objects, or `container_image_group` objects when `group_by` is specified.
   */
  "data"?: Array<ContainerImageItem>;
  /**
   * Pagination links.
   */
  "links"?: ContainerImagesResponseLinks;
  /**
   * Response metadata object.
   */
  "meta"?: ContainerImageMeta;
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
      type: "Array<ContainerImageItem>",
    },
    links: {
      baseName: "links",
      type: "ContainerImagesResponseLinks",
    },
    meta: {
      baseName: "meta",
      type: "ContainerImageMeta",
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
    return ContainerImagesResponse.attributeTypeMap;
  }

  public constructor() {}
}
