/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SplunkHecDestinationType } from "./SplunkHecDestinationType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The Splunk destination.
 */
export class SplunkHecDestination {
  /**
   * The access token of the Splunk destination.
   */
  "accessToken": string;
  /**
   * The intake URL to forward events to.
   */
  "endpoint": string;
  /**
   * The Splunk destination type.
   */
  "type": SplunkHecDestinationType;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    accessToken: {
      baseName: "accessToken",
      type: "string",
      required: true,
    },
    endpoint: {
      baseName: "endpoint",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "SplunkHecDestinationType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SplunkHecDestination.attributeTypeMap;
  }

  public constructor() {}
}
