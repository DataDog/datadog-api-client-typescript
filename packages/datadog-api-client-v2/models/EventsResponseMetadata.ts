/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { EventsResponseMetadataPage } from "./EventsResponseMetadataPage";
import { EventsWarning } from "./EventsWarning";

import {
  AttributeTypeMap,
  UnparsedObject,
} from "../../datadog-api-client-common/util";

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
   * A list of warnings (non-fatal errors) encountered. Partial results might be returned if
   * warnings are present in the response.
   */
  "warnings"?: Array<EventsWarning>;

  /**
   * @ignore
   */
  "unparsedObject"?: UnparsedObject;

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
    warnings: {
      baseName: "warnings",
      type: "Array<EventsWarning>",
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
