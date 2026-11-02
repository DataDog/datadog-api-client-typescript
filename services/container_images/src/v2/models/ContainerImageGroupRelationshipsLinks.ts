import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Links attributes.
 */
export class ContainerImageGroupRelationshipsLinks {
  /**
   * Link containing the original filters combined with the group tags, without `group_by`.
   * Use its `filter[tags]` value in a new request to your site's API host. The tags must satisfy
   * `filter[tags]` syntax restrictions.
   */
  "related"?: string;
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
    related: {
      baseName: "related",
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
    return ContainerImageGroupRelationshipsLinks.attributeTypeMap;
  }

  public constructor() {}
}
