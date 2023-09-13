/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { HttpDestinationCustomHeaderAuthType } from "./HttpDestinationCustomHeaderAuthType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The HTTP destination custom header auth.
 */
export class HttpDestinationCustomHeaderAuth {
  /**
   * The name of the header to use for the HTTP request.
   */
  "headerName": string;
  /**
   * The value of the header to use for the HTTP request.
   */
  "headerValue": string;
  /**
   * The HTTP destination custom header auth type.
   */
  "type": HttpDestinationCustomHeaderAuthType;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    headerName: {
      baseName: "headerName",
      type: "string",
      required: true,
    },
    headerValue: {
      baseName: "headerValue",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "HttpDestinationCustomHeaderAuthType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return HttpDestinationCustomHeaderAuth.attributeTypeMap;
  }

  public constructor() {}
}
