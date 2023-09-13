/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { HttpDestinationBasicAuthType } from "./HttpDestinationBasicAuthType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The HTTP destination basic username and password auth.
 */
export class HttpDestinationBasicAuth {
  /**
   * The password to use for the HTTP request.
   */
  "password": string;
  /**
   * The HTTP destination basic auth type.
   */
  "type": HttpDestinationBasicAuthType;
  /**
   * The username to use for the HTTP request.
   */
  "username": string;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    password: {
      baseName: "password",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "HttpDestinationBasicAuthType",
      required: true,
    },
    username: {
      baseName: "username",
      type: "string",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return HttpDestinationBasicAuth.attributeTypeMap;
  }

  public constructor() {}
}
