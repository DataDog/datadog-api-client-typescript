/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A JSON:API "link object"
 * See: https://jsonapi.org/format/#auto-id--link-objects
 */
export class LinkObject {
  "describedby"?: string;
  "href": string;
  "hreflang"?: Array<string>;
  "meta"?: { [key: string]: any };
  "rel"?: string;
  "title"?: string;
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
    describedby: {
      baseName: "describedby",
      type: "string",
    },
    href: {
      baseName: "href",
      type: "string",
      required: true,
    },
    hreflang: {
      baseName: "hreflang",
      type: "Array<string>",
    },
    meta: {
      baseName: "meta",
      type: "{ [key: string]: any; }",
    },
    rel: {
      baseName: "rel",
      type: "string",
    },
    title: {
      baseName: "title",
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
    return LinkObject.attributeTypeMap;
  }

  public constructor() {}
}
