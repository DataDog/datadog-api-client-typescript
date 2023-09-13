/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { HttpDestinationAuth } from "./HttpDestinationAuth";
import { HttpDestinationType } from "./HttpDestinationType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The HTTP destination.
 */
export class HttpDestination {
  /**
   * The authentication method used for HTTP destinations.
   */
  "auth": HttpDestinationAuth;
  /**
   * The intake URL to forward events to.
   */
  "endpoint": string;
  /**
   * The HTTP destination type.
   */
  "type": HttpDestinationType;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    auth: {
      baseName: "auth",
      type: "HttpDestinationAuth",
      required: true,
    },
    endpoint: {
      baseName: "endpoint",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "HttpDestinationType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return HttpDestination.attributeTypeMap;
  }

  public constructor() {}
}
