import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LinksDescribedBy } from "./LinksDescribedBy";
import { LinksFirst } from "./LinksFirst";
import { LinksLast } from "./LinksLast";
import { LinksNext } from "./LinksNext";
import { LinksPrev } from "./LinksPrev";
import { LinksRelated } from "./LinksRelated";
import { LinksSelf } from "./LinksSelf";

/**
 * A JSON:API "links" member
 * See: https://jsonapi.org/format/#document-links
 */
export class WidgetLinks {
  "describedBy"?: LinksDescribedBy;
  "first"?: LinksFirst;
  "last"?: LinksLast;
  "next"?: LinksNext;
  "prev"?: LinksPrev;
  "related"?: LinksRelated;
  "self"?: LinksSelf;
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
    describedBy: {
      baseName: "describedBy",
      type: "LinksDescribedBy",
    },
    first: {
      baseName: "first",
      type: "LinksFirst",
    },
    last: {
      baseName: "last",
      type: "LinksLast",
    },
    next: {
      baseName: "next",
      type: "LinksNext",
    },
    prev: {
      baseName: "prev",
      type: "LinksPrev",
    },
    related: {
      baseName: "related",
      type: "LinksRelated",
    },
    self: {
      baseName: "self",
      type: "LinksSelf",
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
    return WidgetLinks.attributeTypeMap;
  }

  public constructor() {}
}
