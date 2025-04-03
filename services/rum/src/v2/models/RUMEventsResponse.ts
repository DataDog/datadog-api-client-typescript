import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RUMEvent } from "./RUMEvent";
import { RUMResponseLinks } from "./RUMResponseLinks";
import { RUMResponseMetadata } from "./RUMResponseMetadata";

/**
 * Response object with all events matching the request and pagination information.
 */
export class RUMEventsResponse {
  /**
   * Array of events matching the request.
   */
  "data"?: Array<RUMEvent>;
  /**
   * Links attributes.
   */
  "links"?: RUMResponseLinks;
  /**
   * The metadata associated with a request.
   */
  "meta"?: RUMResponseMetadata;
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
      type: "Array<RUMEvent>",
    },
    links: {
      baseName: "links",
      type: "RUMResponseLinks",
    },
    meta: {
      baseName: "meta",
      type: "RUMResponseMetadata",
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
    return RUMEventsResponse.attributeTypeMap;
  }

  public constructor() {}
}
