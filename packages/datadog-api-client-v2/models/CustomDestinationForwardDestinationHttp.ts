/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CustomDestinationForwardDestinationHttpType } from "./CustomDestinationForwardDestinationHttpType";
import { CustomDestinationHttpDestinationAuth } from "./CustomDestinationHttpDestinationAuth";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The HTTP destination.
 */
export class CustomDestinationForwardDestinationHttp {
  /**
   * Authentication method of the HTTP requests.
   */
  "auth": CustomDestinationHttpDestinationAuth;
  /**
   * The destination for which logs will be forwarded to.
   * Must have HTTPS scheme and forwarding back to Datadog is not allowed.
   */
  "endpoint": string;
  /**
   * Type of the HTTP destination.
   */
  "type": CustomDestinationForwardDestinationHttpType;

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
    auth: {
      baseName: "auth",
      type: "CustomDestinationHttpDestinationAuth",
      required: true,
    },
    endpoint: {
      baseName: "endpoint",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "CustomDestinationForwardDestinationHttpType",
      required: true,
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
    return CustomDestinationForwardDestinationHttp.attributeTypeMap;
  }

  public constructor() {}
}
