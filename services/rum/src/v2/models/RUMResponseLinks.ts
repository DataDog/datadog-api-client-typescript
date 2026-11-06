import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Links attributes.
 */
export class RUMResponseLinks {
  /**
   * Link for the next set of results, only present when there are more results. It always points to the `GET /api/v2/rum/events` endpoint, and keeps `filter[query]`, `filter[from]`, `filter[to]`, `sort` and `page[limit]` of the request. Note that the request can also be made using the
   * POST endpoint with `page.cursor` set to `meta.page.after`.
   */
  "next"?: string;
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
    next: {
      baseName: "next",
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
    return RUMResponseLinks.attributeTypeMap;
  }

  public constructor() {}
}
