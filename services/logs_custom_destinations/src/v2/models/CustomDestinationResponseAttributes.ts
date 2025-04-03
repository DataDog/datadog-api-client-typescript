import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CustomDestinationAttributeTagsRestrictionListType } from "./CustomDestinationAttributeTagsRestrictionListType";
import { CustomDestinationResponseForwardDestination } from "./CustomDestinationResponseForwardDestination";

/**
 * The attributes associated with the custom destination.
 */
export class CustomDestinationResponseAttributes {
  /**
   * Whether logs matching this custom destination should be forwarded or not.
   */
  "enabled"?: boolean;
  /**
   * Whether tags from the forwarded logs should be forwarded or not.
   */
  "forwardTags"?: boolean;
  /**
   * List of [keys of tags](https://docs.datadoghq.com/getting_started/tagging/#define-tags) to be filtered.
   * 
   * An empty list represents no restriction is in place and either all or no tags will be
   * forwarded depending on `forward_tags_restriction_list_type` parameter.
   */
  "forwardTagsRestrictionList"?: Array<string>;
  /**
   * How `forward_tags_restriction_list` parameter should be interpreted.
   * If `ALLOW_LIST`, then only tags whose keys on the forwarded logs match the ones on the restriction list
   * are forwarded.
   * 
   * `BLOCK_LIST` works the opposite way. It does not forward the tags matching the ones on the list.
   */
  "forwardTagsRestrictionListType"?: CustomDestinationAttributeTagsRestrictionListType;
  /**
   * A custom destination's location to forward logs.
   */
  "forwarderDestination"?: CustomDestinationResponseForwardDestination;
  /**
   * The custom destination name.
   */
  "name"?: string;
  /**
   * The custom destination query filter. Logs matching this query are forwarded to the destination.
   */
  "query"?: string;
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
    enabled: {
      baseName: "enabled",
      type: "boolean",
    },
    forwardTags: {
      baseName: "forward_tags",
      type: "boolean",
    },
    forwardTagsRestrictionList: {
      baseName: "forward_tags_restriction_list",
      type: "Array<string>",
    },
    forwardTagsRestrictionListType: {
      baseName: "forward_tags_restriction_list_type",
      type: "CustomDestinationAttributeTagsRestrictionListType",
    },
    forwarderDestination: {
      baseName: "forwarder_destination",
      type: "CustomDestinationResponseForwardDestination",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    query: {
      baseName: "query",
      type: "string",
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
    return CustomDestinationResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
