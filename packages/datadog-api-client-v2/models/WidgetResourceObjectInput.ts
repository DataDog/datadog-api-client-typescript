/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ResourceObjectInputAttributes } from "./ResourceObjectInputAttributes";
import { WidgetLinks } from "./WidgetLinks";
import { WidgetRelationshipObjectInput } from "./WidgetRelationshipObjectInput";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A JSON:API resource object.
 * See: https://jsonapi.org/format/#document-resource-objects
 */
export class WidgetResourceObjectInput {
  "attributes"?: ResourceObjectInputAttributes;
  "id": string;
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
      type: "ResourceObjectInputAttributes",
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
    return WidgetResourceObjectInput.attributeTypeMap;
  }

  public constructor() {}
}
