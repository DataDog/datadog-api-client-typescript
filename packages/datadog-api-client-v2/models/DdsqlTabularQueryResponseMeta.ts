/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Top-level JSON:API meta block accompanying every DDSQL tabular query response.
 * Carries standard observability handles for client-side correlation.
 */
export class DdsqlTabularQueryResponseMeta {
  /**
   * Server-side time spent serving this request, in milliseconds.
   */
  "elapsed": number;
  /**
   * Echo of the `DD-Request-ID` header assigned by Datadog's edge to this request,
   * for support correlation.
   */
  "requestId": string;

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
      required: true,
      format: "int64",
    },
    requestId: {
      baseName: "request_id",
      type: "string",
      required: true,
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
    return DdsqlTabularQueryResponseMeta.attributeTypeMap;
  }

  public constructor() {}
}
