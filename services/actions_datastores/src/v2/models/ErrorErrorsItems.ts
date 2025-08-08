import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ErrorErrorsItemsLinks } from "./ErrorErrorsItemsLinks";
import { ErrorErrorsItemsSource } from "./ErrorErrorsItemsSource";

/**
 * The definition of `ErrorErrorsItems` object.
 */
export class ErrorErrorsItems {
  /**
   * The `items` `code`.
   */
  "code"?: string;
  /**
   * The `items` `detail`.
   */
  "detail"?: string;
  /**
   * The `items` `id`.
   */
  "id"?: string;
  /**
   * The definition of `ErrorErrorsItemsLinks` object.
   */
  "links"?: ErrorErrorsItemsLinks;
  /**
   * The `items` `meta`.
   */
  "meta"?: any;
  /**
   * The definition of `ErrorErrorsItemsSource` object.
   */
  "source"?: ErrorErrorsItemsSource;
  /**
   * The `items` `status`.
   */
  "status"?: number;
  /**
   * The `items` `title`.
   */
  "title"?: string;
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
    code: {
      baseName: "code",
      type: "string",
    },
    detail: {
      baseName: "detail",
      type: "string",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    links: {
      baseName: "links",
      type: "ErrorErrorsItemsLinks",
    },
    meta: {
      baseName: "meta",
      type: "any",
    },
    source: {
      baseName: "source",
      type: "ErrorErrorsItemsSource",
    },
    status: {
      baseName: "status",
      type: "number",
      format: "int64",
    },
    title: {
      baseName: "title",
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
    return ErrorErrorsItems.attributeTypeMap;
  }

  public constructor() {}
}
