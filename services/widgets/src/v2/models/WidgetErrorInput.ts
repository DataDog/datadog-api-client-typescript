import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ErrorLinks } from "./ErrorLinks";
import { ErrorSource } from "./ErrorSource";

/**
 * A JSON:API "error object".
 * See: https://jsonapi.org/format/1.0/#error-objects
 */
export class WidgetErrorInput {
  "code"?: string;
  "detail"?: string;
  "id"?: string;
  "links"?: ErrorLinks;
  "meta"?: { [key: string]: any };
  /**
   * An object containing references to the primary source of the error.
   * See: https://jsonapi.org/format/#error-objects
   */
  "source"?: ErrorSource;
  "status"?: string;
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
      type: "ErrorLinks",
    },
    meta: {
      baseName: "meta",
      type: "{ [key: string]: any; }",
    },
    source: {
      baseName: "source",
      type: "ErrorSource",
    },
    status: {
      baseName: "status",
      type: "string",
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
    return WidgetErrorInput.attributeTypeMap;
  }

  public constructor() {}
}
