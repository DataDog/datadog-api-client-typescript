import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ContainerImageGroupRelationshipsLinks } from "./ContainerImageGroupRelationshipsLinks";

/**
 * Relationships to Container Images inside a Container Image Group.
 */
export class ContainerImageGroupImagesRelationshipsLink {
  /**
   * This array is always empty, even when the group includes images. To retrieve the images in
   * this group, make a new request without `group_by`, using the `filter[tags]` value from
   * `links.related` and your site's API host. The tags must satisfy `filter[tags]` syntax restrictions.
   */
  "data"?: Array<string>;
  /**
   * Links attributes.
   */
  "links"?: ContainerImageGroupRelationshipsLinks;
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
      type: "Array<string>",
    },
    links: {
      baseName: "links",
      type: "ContainerImageGroupRelationshipsLinks",
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
    return ContainerImageGroupImagesRelationshipsLink.attributeTypeMap;
  }

  public constructor() {}
}
