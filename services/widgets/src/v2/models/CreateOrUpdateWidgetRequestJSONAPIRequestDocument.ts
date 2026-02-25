import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreateOrUpdateWidgetRequestResourceObjectRequest } from "./CreateOrUpdateWidgetRequestResourceObjectRequest";
import { WidgetErrorInput } from "./WidgetErrorInput";
import { WidgetLinks } from "./WidgetLinks";
import { WidgetResourceObjectInput } from "./WidgetResourceObjectInput";

export class CreateOrUpdateWidgetRequestJSONAPIRequestDocument {
  "data": CreateOrUpdateWidgetRequestResourceObjectRequest;
  "errors"?: Array<WidgetErrorInput>;
  "included"?: Array<WidgetResourceObjectInput>;
  /**
   * A JSON:API "links" member
   * See: https://jsonapi.org/format/#document-links
   */
  "links"?: WidgetLinks;
  "meta"?: { [key: string]: any };
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
    data: {
      baseName: "data",
      type: "CreateOrUpdateWidgetRequestResourceObjectRequest",
      required: true,
    },
    errors: {
      baseName: "errors",
      type: "Array<WidgetErrorInput>",
    },
    included: {
      baseName: "included",
      type: "Array<WidgetResourceObjectInput>",
    },
    links: {
      baseName: "links",
      type: "WidgetLinks",
    },
    meta: {
      baseName: "meta",
      type: "{ [key: string]: any; }",
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
    return CreateOrUpdateWidgetRequestJSONAPIRequestDocument.attributeTypeMap;
  }

  public constructor() {}
}
