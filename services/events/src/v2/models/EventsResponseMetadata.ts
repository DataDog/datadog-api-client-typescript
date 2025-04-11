import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { EventsResponseMetadataPage } from "./EventsResponseMetadataPage";
import { EventsWarning } from "./EventsWarning";

/**
 * The metadata associated with a request.
 */
export class EventsResponseMetadata {
  /**
   * The time elapsed in milliseconds.
   */
  "elapsed"?: number;
  /**
   * Pagination attributes.
   */
  "page"?: EventsResponseMetadataPage;
  /**
   * The identifier of the request.
   */
  "requestId"?: string;
  /**
   * The request status.
   */
  "status"?: string;
  /**
   * A list of warnings (non-fatal errors) encountered. Partial results might be returned if
   * warnings are present in the response.
   */
  "warnings"?: Array<EventsWarning>;
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
    elapsed: {
      baseName: "elapsed",
      type: "number",
      format: "int64",
    },
    page: {
      baseName: "page",
      type: "EventsResponseMetadataPage",
    },
    requestId: {
      baseName: "request_id",
      type: "string",
    },
    status: {
      baseName: "status",
      type: "string",
    },
    warnings: {
      baseName: "warnings",
      type: "Array<EventsWarning>",
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
    return EventsResponseMetadata.attributeTypeMap;
  }

  public constructor() {}
}
