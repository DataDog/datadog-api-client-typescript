/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LLMObsCursorMeta } from "./LLMObsCursorMeta";
import { LLMObsDatasetRecordDataResponse } from "./LLMObsDatasetRecordDataResponse";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response containing a paginated list of LLM Observability dataset records.
 */
export class LLMObsDatasetRecordsListResponse {
  /**
   * List of dataset records.
   */
  "data": Array<LLMObsDatasetRecordDataResponse>;
  /**
   * Pagination cursor metadata.
   */
  "meta"?: LLMObsCursorMeta;

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
      type: "Array<LLMObsDatasetRecordDataResponse>",
      required: true,
    },
    meta: {
      baseName: "meta",
      type: "LLMObsCursorMeta",
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
    return LLMObsDatasetRecordsListResponse.attributeTypeMap;
  }

  public constructor() {}
}
