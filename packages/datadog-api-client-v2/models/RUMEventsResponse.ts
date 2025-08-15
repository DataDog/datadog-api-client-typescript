/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RUMEvent } from "./RUMEvent";
import { RUMResponseLinks } from "./RUMResponseLinks";
import { RUMResponseMetadata } from "./RUMResponseMetadata";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
      type: "{ [key: string]: any; }",
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
