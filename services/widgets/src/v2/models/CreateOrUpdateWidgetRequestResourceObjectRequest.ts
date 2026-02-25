import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreateOrUpdateWidgetRequestAttributes } from "./CreateOrUpdateWidgetRequestAttributes";
import { WidgetLinks } from "./WidgetLinks";
import { WidgetRelationshipObjectInput } from "./WidgetRelationshipObjectInput";

export class CreateOrUpdateWidgetRequestResourceObjectRequest {
  "attributes": CreateOrUpdateWidgetRequestAttributes;
  "id"?: string;
  "lid"?: string;
  /**
   * A JSON:API "links" member
   * See: https://jsonapi.org/format/#document-links
   */
  "links"?: WidgetLinks;
  "meta"?: { [key: string]: any };
  "relationships"?: { [key: string]: WidgetRelationshipObjectInput };
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
      type: "CreateOrUpdateWidgetRequestAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
    },
    lid: {
      baseName: "lid",
      type: "string",
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
      type: "{ [key: string]: WidgetRelationshipObjectInput; }",
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
    return CreateOrUpdateWidgetRequestResourceObjectRequest.attributeTypeMap;
  }

  public constructor() {}
}
