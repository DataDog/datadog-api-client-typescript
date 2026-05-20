/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LLMObsSpansResponsePage } from "./LLMObsSpansResponsePage";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Metadata accompanying the spans response.
 */
export class LLMObsSpansResponseMeta {
  /**
   * Time elapsed for the query in milliseconds.
   */
  "elapsed": number;
  /**
   * Pagination cursor for the spans response.
   */
  "page": LLMObsSpansResponsePage;
  /**
   * Unique identifier for the request.
   */
  "requestId": string;
  /**
   * Status of the query execution.
   */
  "status": string;

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
    page: {
      baseName: "page",
      type: "LLMObsSpansResponsePage",
      required: true,
    },
    requestId: {
      baseName: "request_id",
      type: "string",
      required: true,
    },
    status: {
      baseName: "status",
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
    return LLMObsSpansResponseMeta.attributeTypeMap;
  }

  public constructor() {}
}
