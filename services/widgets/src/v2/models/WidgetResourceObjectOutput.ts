import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ResourceObjectOutputAttributes } from "./ResourceObjectOutputAttributes";
import { WidgetLinks } from "./WidgetLinks";
import { WidgetRelationshipObjectOutput } from "./WidgetRelationshipObjectOutput";

/**
 * A JSON:API resource object.
 * See: https://jsonapi.org/format/#document-resource-objects
 */
export class WidgetResourceObjectOutput {
  "attributes"?: ResourceObjectOutputAttributes;
  "id": string;
  /**
   * A JSON:API "links" member
   * See: https://jsonapi.org/format/#document-links
   */
  "links"?: WidgetLinks;
  "meta"?: { [key: string]: any };
  "relationships"?: { [key: string]: WidgetRelationshipObjectOutput };
  "type": string;
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
      type: "ResourceObjectOutputAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    links: {
      baseName: "links",
      type: "WidgetLinks",
    },
    meta: {
      baseName: "meta",
      type: "{ [key: string]: any; }",
    },
    relationships: {
      baseName: "relationships",
      type: "{ [key: string]: WidgetRelationshipObjectOutput; }",
    },
    type: {
      baseName: "type",
      type: "string",
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
    return WidgetResourceObjectOutput.attributeTypeMap;
  }

  public constructor() {}
}
